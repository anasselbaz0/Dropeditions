import React from 'react';
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn, updateSection} from "../redux/actions/authActions";

const Navbar = (props) => {
    let isLoggedIn = useSelector(state => state.auth.loggedIn);
    const dispatch = useDispatch();
    return (
        <div className="shadow-md md:flex justify-between items-center block py-4 px-6 md:px-8">
            <div className="font-bold font-xl text-center md:text-left mb-4 md:mb-0 uppercase"> dropeditions </div>
            <div className="block md:flex">
                <Button onClick={() => dispatch(updateSection(1))}> Private section 1 </Button>
                <Button onClick={() => dispatch(updateSection(2))}> Private section 2 </Button>
                <Button onClick={() => dispatch(updateSection(3))}> Private section 3 </Button>
            </div>
            <Button outlined onClick={() => {
                if (isLoggedIn) dispatch(setIsLoggedIn(false))
            }}> {isLoggedIn ? 'Logout' : 'Login'} </Button>
        </div>
    );
};

export default Navbar;