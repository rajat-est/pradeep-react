// import React from "react";
// import { ButtonTag, Heading } from "../style/GalleryStyle";
// import { useFormik } from "formik";
// import InputFormik from "./InputFormik";
// import { SignUpSchema } from "../Schemas/SignUpSchema";
// import { ButtonSubmit } from "../style/FormInput";
// import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import React from "react";
import { ButtonSubmit } from "../style/FormInput";
import { RegistrationSchemas } from "../Schemas/schema";
import InputFormik from "./InputFormik";
import { useNavigate } from "react-router-dom";
import API from "./axios/Axios";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  mobile: "",
  dateOfBirth: "",
  gender: "male",
  password:"",
  confPassword:""
};

const SignUp = () => {
  const navigate = useNavigate();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegistrationSchemas,
      onSubmit: async (values) => {
        // sessionStorage.setItem("formData", JSON.stringify(value));
        try {
          await API.post("/Registration.php", {
            data:{
              name: values.name,
              lastName: values.lastName,
              email: values.email,
              mobile: values.mobile,
              dateOfBirth: values.dateOfBirth,
              gender: values.gender,
              password: values.password,
              confPassword: values.confPassword,
            }
          });
           navigate("/login");
        } catch (error) {
          console.log(error);
        }
      },
    });

  return (
    <>
      {/* <form onSubmit={(e) => handleSubmit(e)}>
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
      </form> */}
      <form name="FormData" onSubmit={(e) => handleSubmit(e)}>
        <div className="FormMain">
          <InputFormik
            name="name"
            label="First Name"
            placeholder="Enter Your First Name"
            id="inputname"
            values={values.name}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <InputFormik
            name="lastName"
            label="Last name"
            placeholder="Enter Your Last Name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            id="inputlname"
            values={values.lastName}
            errors={errors}
            touched={touched}
          />
          <InputFormik
            name="email"
            label="Email"
            placeholder="Enter Your Email"
            handleChange={handleChange}
            id="inputEmail"
            values={values.email}
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
          />
          <InputFormik
            name="mobile"
            label="Mobile"
            placeholder="Enter Your Mobile No."
            handleChange={handleChange}
            id="inputBirth"
            values={values.mobile}
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
          />
          <InputFormik
            name="dateOfBirth"
            label="Date Of Birth"
            placeholder="DD/MM/YY"
            handleChange={handleChange}
            id="inputBirth"
            values={values.dateOfBirth}
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
          />
          <label> Please Select Your Genter</label>
          <select
            name="gender"
            id="selectGender"
            value={values.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
          <ButtonSubmit bg="#fff" type="submit" value={"Submit"} />
        </div>
      </form>
    </>
  );
};

export default SignUp;
