import { useFormik } from "formik";
import React from "react";
import { ButtonSubmit } from "../style/FormInput";
import { RegistrationSchemas } from "../Schemas/schema";
import InputFormik from "./InputFormik";
import { useNavigate } from "react-router-dom";
const initialValues = {
  name: "",
  lastName: "",
  email: "",
  mobile: "",
  dateOfBirth: "",
  gender: "male",
};
const RegistrationFormik = () => {
  const Navigate = useNavigate();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    setFieldValue,
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: RegistrationSchemas,
    onSubmit: (values, { setSubmitting }) => {
      try {
        fetch("http://localhost/API/Registration.php", {
          method: "POST",
          body: JSON.stringify({
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            mobile: values.mobile,
            dateOfBirth: values.dateOfBirth,
            gender: values.gender,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((response) => response.json());
        Navigate("/table");
        // .then((json) => console.log(json));
      } catch (Exception) {
        console.log(Exception);
      }
    },
  });

  return (
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
        <ButtonSubmit bg="#fff" type="submit" value={"Submit"} />
      </div>
    </form>
  );
};

export default RegistrationFormik;
