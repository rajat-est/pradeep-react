import React, { createContext, useState, useContext } from "react";
const ValidationContext = createContext();
const ValidationProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);
     return (
        <ValidationContext.Provider
          value={{
            formData,
            setFormData,
          }}
        >
          {children}
        </ValidationContext.Provider>
      );
    };
    
    export const useValidationContext = () => {
      return useContext(ValidationContext);
    };
    
    export { ValidationProvider, ValidationContext }