import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import YouTube from "@u-wave/react-youtube";
import Section from "./components/Section";

function App() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
        <Navbar/>
        {/* Content */}
        <div className="">

            <div className="my-10 font-bold uppercase tracking-wide text-3xl text-gray-600 w-full text-center"> Welcome to dropeditions test ! </div>

            {/* Private 1 : cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020 */}
            <Section title="Private section 1">
                cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020
            </Section>

            {/* Private 2 : cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020 */}
            <Section title="Private section 2">
                cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020
            </Section>

            {/* Private 3 : Youtube video starting at 1min,3s = 63s */}
            <Section title="Private section 3">
                <YouTube
                    className="m-auto"
                    video="Sfe4qH_TorM"  // video = ID of the youtube video
                    startSeconds={63}
                    autoplay
                />
            </Section>



        </div>
        <Footer/>
    </div>
  );
}

export default App;
