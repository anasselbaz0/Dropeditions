import React from 'react';
import clsx from 'clsx';

const ButtonGroup = props => (
  <div
    className={clsx(
      'w-full mb-3 flex flex-1 flex-col md:flex-row md:justify-end',
      props.className || '',
    )}
  >
    {props.children}
  </div>
);

export default ButtonGroup;
