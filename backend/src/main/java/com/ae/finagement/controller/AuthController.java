package com.ae.finagement.controller;

import com.ae.finagement.model.ERole;
import com.ae.finagement.model.Role;
import com.ae.finagement.model.User;
import com.ae.finagement.repository.RoleRepository;
import com.ae.finagement.repository.UserRepository;
import com.ae.finagement.security.jwt.payload.request.LoginRequest;
import com.ae.finagement.security.jwt.payload.request.SignupRequest;
import com.ae.finagement.security.jwt.payload.response.JwtResponse;
import com.ae.finagement.security.jwt.payload.response.MessageResponse;
import com.ae.finagement.utils.JwtUtils;
import com.ae.finagement.utils.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Username is already taken!");
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role publicRole = roleRepository.findByName(ERole.PUBLIC)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(publicRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "privateUser1":
                        Role privateRole1 = roleRepository.findByName(ERole.PRIVATE_USER_1)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(privateRole1);

                        break;
                    case "privateUser2":
                        Role privateRole2 = roleRepository.findByName(ERole.PRIVATE_USER_2)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(privateRole2);

                        break;
                    case "privateUser3":
                        Role privateRole3 = roleRepository.findByName(ERole.PRIVATE_USER_3)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(privateRole3);

                        break;
                    default:
                        System.out.println("User");
                        Role userRole = roleRepository.findByName(ERole.PRIVATE_USER_3)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}