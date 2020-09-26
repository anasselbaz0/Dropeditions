import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
        <Navbar/>
        <Footer/>
    </div>
  );
}

export default App;
