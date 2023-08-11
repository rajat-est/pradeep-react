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
  gender: "male",
};
const RegistrationFormik = () => {
  const { handleChange, handleBlur, handleSubmit, values, errors,setFieldValue,isSubmitting ,touched} = useFormik({
    initialValues: initialValues,
    validationSchema: RegistrationSchemas,
    onSubmit: (values,{setSubmitting}) => {
      fetch('https://crudcrud.com/api/09c17d35e99c4985994da2cf7e3fedd8/unicorns', {
        method: 'POST',
        body: JSON.stringify({
          name:values.name,
          lname: values.lname,
          email: values.email,
          dateOfBirth: values.dateOfBirth,
          gender: values.gender,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
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
          value={values.gender}
          onChange={handleChange}
        >
         
        <option value="male" >Male</option>
        <option value="female">Female</option>
        </select>
        <ButtonSubmit disabled={isSubmitting} bg="#fff" type="submit" value={"Submit"} />
      </div>
    </form>
  );
};

export default RegistrationFormik;
