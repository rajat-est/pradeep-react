import React, { createContext, useState, useContext } from "react";
const LoginContext = createContext();
const LoginProvider = ({ children }) => {
    const [login, setLogin]=useState([]);
     return (
        <LoginContext.Provider
          value={{
            login,
            setLogin,
          }}
        >
          {children}
        </LoginContext.Provider>
      );
    };
    
    export const LoginGlobalContext = () => {
      return useContext(LoginContext);
    };
    
    export { LoginContext, LoginProvider }