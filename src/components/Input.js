import React from "react";
import { FormInput } from "../style/FormInput";

const Input = ({ label, values, handleChange, errors, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}> {label}</label>
      <FormInput
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={values}
        id={id}
        onChange={handleChange}
        onBlur={handleChange}
      />
      <span className="errors">{errors}</span>
    </>
  );
};
export default Input;
