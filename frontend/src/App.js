import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import YouTube from "@u-wave/react-youtube";

function App() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
        <Navbar/>
        {/* Content */}
        <div className="">

            <div className="my-10 font-bold uppercase tracking-wide text-3xl text-gray-600 w-full text-center"> Welcome to dropeditions test ! </div>

            {/* Private 1 : cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020 */}
            <div className="flex flex-col items-center justify-center my-4">
                <div className="text-2xl text-blue-600 font-black mb-4"> Private section 1 </div>
                <div className="w-1/2 bg-gray-200 rounded-md shadow-md p-8 capitalize">
                    cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020
                </div>
            </div>

            {/* Private 2 : cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020 */}
            <div className="flex flex-col items-center justify-center my-4">
                <div className="text-2xl text-blue-600 font-black mb-4"> Private section 2 </div>
                <div className="w-1/2 bg-gray-200 rounded-md shadow-md p-8 capitalize">
                    cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020
                </div>
            </div>

            {/* Private 3 : Youtube video starting at 1min,3s = 63s */}
            <div className="flex flex-col items-center justify-center my-4">
                <div className="text-2xl text-blue-600 font-black mb-4"> Private section 3 </div>
                <YouTube
                    video="Sfe4qH_TorM"
                    startSeconds={63}
                    autoplay
                />
            </div>



        </div>
        <Footer/>
    </div>
  );
}

export default App;
