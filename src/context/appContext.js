import React, { useState } from 'react';

const AppContext = React.createContext('hello');

export const AppContextProvider = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
