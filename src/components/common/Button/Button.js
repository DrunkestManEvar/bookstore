import React from 'react';

const Button = ({ children, classesArray }) => {
  const btnClasses = classesArray ? ['btn', ...classesArray].join(' ') : 'btn';

  return <button className={btnClasses}>{children}</button>;
};

export default Button;
