import React from 'react';

const Section = (props) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center my-4">
                <div className="text-2xl text-blue-600 font-black mb-4"> {props.title} </div>
                <div className="w-1/2 bg-gray-200 rounded-md shadow-md p-8 capitalize">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Section;