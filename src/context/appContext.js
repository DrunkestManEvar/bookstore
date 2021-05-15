import React, { useState } from 'react';

const AppContext = React.createContext(null);

export const AppContextProvider = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [randomBookClicks, setRandomBookClicks] = useState(0);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isBurgerOpen,
        setIsBurgerOpen,
        randomBookClicks,
        setRandomBookClicks,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
