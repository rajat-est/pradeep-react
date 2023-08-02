import React, { createContext, useState, useContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [searchData, setSearchData]=useState('')
     return (
        <AppContext.Provider
          value={{
           searchData,
           setSearchData,
          }}
        >
          {children}
        </AppContext.Provider>
      );
    };
    
    export const useGlobalContext = () => {
      return useContext(AppContext);
    };
    
    export { AppContext, AppProvider }