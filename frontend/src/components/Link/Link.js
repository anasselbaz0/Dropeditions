import React from 'react';

const Link = props => (
  <span
    onClick={props.onClick}
    className="m-auto font-bold text-sm cursor-pointer text-blue-500 hover:underline hover:text-blue-800"
  >
    {props.children}
  </span>
);

export default Link;
