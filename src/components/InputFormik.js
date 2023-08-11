import React from "react";
import { FormInput } from "../style/FormInput";

const InputFormik = ({
  name,
  label,
  id,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id}> {label}</label>
      <FormInput
        type={props.type || "text"}
        name={name}
        placeholder={props.placeholder}
        value={values}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur} 
       />
      {errors[name] && touched[name] && (
        <span className="errors">{errors[name]}</span>
      )}
    </>
  );
};
export default InputFormik;
