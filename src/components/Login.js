import React, { useState } from "react";
import { ButtonTag, Heading } from "../style/GalleryStyle";
import { useFormik } from "formik";
import InputFormik from "./InputFormik";
import { LoginSchema } from "../Schemas/LoginSchema";
import { ButtonSubmit } from "../style/FormInput";
import { Link, useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};

const SignUp = () => {
const [err,setErr] = useState('')
  const navigate = useNavigate();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (formValues) => {
        const sessionData =
          JSON.parse(sessionStorage.getItem("formData")) || {};
        if (
          formValues.email === sessionData.email &&
          formValues.password === sessionData.password
        ) {
          const updateSession = { ...sessionData, isLoggedIn: true };
          sessionStorage.setItem("formData", JSON.stringify(updateSession));
          navigate('/');
          setErr('')
        }else{
           setErr("Your password and email don't match")
        }
      },
    });
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="FormMain">
          <Heading m="0 0 20px 0">Login Up</Heading>
          <InputFormik
            name="email"
            label="Email"
            placeholder="Enter Your Email"
            id="inputEmail"
            values={values.email}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />

          <InputFormik
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Your Passwor"
            id="inputPassword"
            values={values.password}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <ButtonSubmit bg="#fff" type="submit" value={"Login"} />
          <p className="errors">{err}</p>
          <br/>
          <p>If you don't have an Account  <Link to='/signUp'>Sign Up</Link></p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
