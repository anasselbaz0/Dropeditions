import React from 'react';
import Button from "./Button";

const Navbar = (props) => {
    return (
        <div className="shadow-md h-16 md:h-20 flex justify-between items-center px-6 md:px-8">
            <div className="font-bold uppercase"> dropeditions </div>
            <div className="flex">
                <Button> Home </Button>
                {props.isLoggedIn && <Button> Private section 1 </Button>}
                {props.isLoggedIn && <Button> Private section 2 </Button>}
                {props.isLoggedIn && <Button> Private section 3 </Button>}
            </div>
            <Button> Authentification </Button>
        </div>
    );
};

export default Navbar;