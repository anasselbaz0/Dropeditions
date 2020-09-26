import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import YouTube from "@u-wave/react-youtube";
import Section from "./components/Section";
import Login from "./components/Auth/Login";
import {useDispatch, useSelector} from "react-redux";
import {updateSection} from "./redux/actions/authActions";



function App() {

    const dispatch = useDispatch();
  let isLoggedIn = useSelector(state => state.auth.loggedIn);
  let section = useSelector(state => state.auth.section);
  let stateRole = useSelector(state => state.auth.profile.roles);
  let role = stateRole!==undefined ? stateRole[0] : stateRole;
  if (role !== undefined) {
      let roleNumber = parseInt(role.slice(role.length - 1));
      dispatch(updateSection(roleNumber));
  }

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
        <Navbar/>
        {/* Content */}
        <div className="">

            {/* If the user is not connected, the Login component will appear. */}
            {/* Else, and based on it's role (user1 or user2 or user3), */}
            {/* the allowed section will appear */}

            {
                !isLoggedIn ?
                    <div className="w-full m-auto">
                        <Login/>
                    </div>
                    :
                    <React.Fragment>
                        {/* Private 1 : cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020 */}
                        {section===1 && role==='PRIVATE_USER_1' && <Section title="Private section 1">
                            cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020
                        </Section>}

                        {/* Private 2 : cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020 */}
                        {section===2 && role==='PRIVATE_USER_2' && <Section title="Private section 2">
                            cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020
                        </Section>}

                        {/* Private 3 : Youtube video starting at 1min,3s = 63s */}
                        {section===3 && role==='PRIVATE_USER_3' && <Section title="Private section 3">
                            <YouTube
                                className="m-auto w-full"
                                video="Sfe4qH_TorM"  // video = ID of the youtube video
                                startSeconds={63}
                                autoplay
                            />
                        </Section>}

                    </React.Fragment>
            }

        </div>
        <Footer/>
    </div>
  );
}

export default App;
