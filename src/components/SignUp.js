import React from "react";
import { ButtonTag, Heading } from "../style/GalleryStyle";
import { useFormik } from "formik";
import InputFormik from "./InputFormik";
import { SignUpSchema } from "../Schemas/SignUpSchema";
import { ButtonSubmit } from "../style/FormInput";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  confPassword: "",
  isLoggedIn: false,
};

const SignUp = () => {
  const navigate = useNavigate()
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (value) => {
        sessionStorage.setItem("formData", JSON.stringify(value));
        navigate('/login')
      },

    });

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="FormMain">
          <Heading m="0 0 20px 0">Sign Up</Heading>
          <InputFormik
            name="name"
            label="First Name"
            placeholder="Enter Your First Name"
            id="inputName"
            values={values.name}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <InputFormik
            name="lname"
            label="Last Name"
            placeholder="Enter Your Last Name"
            id="inputLastName"
            values={values.lname}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
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
            name="phone"
            label="Phone No."
            placeholder="Enter Your Phone No."
            id="inputPhone"
            values={values.phone}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <InputFormik
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Your Password"
            id="inputPassword"
            values={values.password}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <InputFormik
            type="password"
            name="confPassword"
            label="Confirm Password"
            placeholder="Enter Confirm Password"
            id="inputConfPassword"
            values={values.confPassword}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <ButtonSubmit bg="#fff" type="submit" value={"Sign Up"} />
          <p>
          If you already have an account <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
