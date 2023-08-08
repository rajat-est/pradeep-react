import { useFormik } from "formik";
import React from "react";
import { ButtonSubmit } from "../style/FormInput";
import { RegistrationSchemas } from "../Schemas/schema";
import InputFormik from "./InputFormik";
const initialValues = {
  name: "",
  lname: "",
  email: "",
  dateOfBirth: "",
  gender: "",
};
const RegistrationFormik = () => {
  const { handleChange, handleBlur, handleSubmit, values, errors,setFieldValue,isSubmitting ,touched} = useFormik({
    initialValues: initialValues,
    validationSchema: RegistrationSchemas,
    onSubmit: (values,{setSubmitting}) => {
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
        }, 4000);
      console.log(values);
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
          handleBlur= {handleBlur}
          touched ={touched}
          
        />
        <InputFormik
          name="lname"
          label="Last name"
          placeholder="Enter Your Last Name"
          handleChange={handleChange}
          handleBlur= {handleBlur}
          id="inputlname"
          values={values.lname}
          errors={errors}
          touched ={touched}
        />
        <InputFormik
          name="email"
          label="Email"
          placeholder="Enter Your Email"
          handleChange={handleChange}
          id="inputEmail"
          values={values.email}
          errors={errors}
          handleBlur= {handleBlur}
          touched ={touched}

        />
        <InputFormik
          name="dateOfBirth"
          label="Date Of Birth"
          placeholder="DD/MM/YY"
          handleChange={handleChange}
          id="inputBirth"
          values={values.dateOfBirth}
          errors={errors}
          handleBlur= {handleBlur}
          touched ={touched}

        />
        <label> Please Select Your Genter</label>
        <select
          name="gender"
          id="selectGender"
          values={values.gender}
          onChange={handleChange}
        >
          <option values="male">Male</option>
          <option values="female">Female</option>
        </select>
        <ButtonSubmit disabled={isSubmitting} bg="#fff" type="submit" values={"Submit"} />
      </div>
    </form>
  );
};

export default RegistrationFormik;
