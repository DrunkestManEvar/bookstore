import React, { useContext } from 'react';
import AppContext from '../../../context/appContext';

const Overlay = ({ children }) => {
  const { isModalOpen } = useContext(AppContext);

  const overlayClasses = ['overlay'];

  if (isModalOpen) overlayClasses.push('show');

  return <div className={overlayClasses.join(' ')}>{children}</div>;
};

export default Overlay;
