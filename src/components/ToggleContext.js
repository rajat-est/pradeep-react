import React, { createContext, useState } from 'react';

const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [isToggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled((prevState) => !prevState);
  };

  return (
    <ToggleContext.Provider value={{isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export { ToggleContext, ToggleProvider };