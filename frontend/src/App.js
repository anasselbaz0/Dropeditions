import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import YouTube from "@u-wave/react-youtube";
import Section from "./components/Section";
import Login from "./components/Auth/Login";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
        <Navbar isLoggedIn={isLoggedIn}/>
        {/* Content */}
        <div className="">

            {
                !isLoggedIn ?
                    <div className="w-full m-auto">
                        <Login/>
                    </div>
                    :
                    <React.Fragment>
                        {/* Private 1 : cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020 */}
                        {isLoggedIn && <Section title="Private section 1">
                            cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020
                        </Section>}

                        {/* Private 2 : cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020 */}
                        {isLoggedIn && <Section title="Private section 2">
                            cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020
                        </Section>}

                        {/* Private 3 : Youtube video starting at 1min,3s = 63s */}
                        {isLoggedIn && <Section title="Private section 3">
                            <YouTube
                                className="m-auto"
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
