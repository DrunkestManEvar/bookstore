import React from 'react';

const Button = ({ children, classesArray, handleClick }) => {
  const btnClasses = classesArray ? ['btn', ...classesArray].join(' ') : 'btn';

  return (
    <button className={btnClasses} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
