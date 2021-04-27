import React from 'react';

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className={`input input_${type}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
