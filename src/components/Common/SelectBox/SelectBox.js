import React from 'react';

import './SelectBox.scss';
const SelectBox = ({ children, className, style, onChange }) => {
  return (
    <select
      onChange={onChange}
      className={`select-box ${className}`}
      style={style}
    >
      {children}
    </select>
  );
};

export default SelectBox;
