import React from 'react';

const Button = ({ children, classesArray, showBookModal }) => {
  const btnClasses = classesArray ? ['btn', ...classesArray].join(' ') : 'btn';

  return (
    <button className={btnClasses} onClick={showBookModal}>
      {children}
    </button>
  );
};

export default Button;
