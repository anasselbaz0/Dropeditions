import React from 'react';
import clsx from "clsx";

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={clsx("rounded-sm w-full md:w-auto font-bold text-sm my-1 mr-2 uppercase py-3 px-8",
            props.outlined ? "bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-100" : "bg-blue-700 text-white hover:bg-blue-800")}>
            {props.children}
        </button>
    );
};

export default Button;