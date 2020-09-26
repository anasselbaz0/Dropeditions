import React from 'react';
import Button from "./Button";

const Navbar = () => {
    return (
        <div className="shadow-md h-16 md:h-20 flex justify-between items-center px-6 md:px-8">
            <div className="font-bold uppercase"> dropeditions </div>
            <div className="flex">
                <Button> Home </Button>
                <Button> Private section 1 </Button>
                <Button> Private section 2 </Button>
                <Button> Private section 3 </Button>
            </div>
            <Button> Authentification </Button>
        </div>
    );
};

export default Navbar;