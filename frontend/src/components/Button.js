import React from 'react';

const Button = (props) => {
    return (
        <button className="font-bold text-sm mx-2 uppercase bg-blue-700 text-white hover:bg-blue-800 py-3 px-8">
            {props.children}
        </button>
    );
};

export default Button;