import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { ButtonSubmit } from "../style/FormInput";
import { RegistrationSchemas } from "../Schemas/schema";
import InputFormik from "./InputFormik";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const UpdateForm = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [Data, setDummyData] = useState({});
  const API = "http://localhost/API/singleData.php";
  const fetchData =  (url, id) => {
    const res =  fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json())
    .then((json) =>setDummyData(json.tableData[0]));
     setLoader(false);
  };
  useEffect(() => {
    fetchData(API, id);
  }, []);
  let initialValues = {
    name: Data?.name||"",
    lastName: Data?.lastName||"",
    email: Data?.email||"",
    mobile: Data?.mobile||"",
    dateOfBirth: Data?.dateOfBirth||"",
    gender: Data?.gender||"",
  };

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
    enableReinitialize:Data?true:false,
    initialValues: initialValues,
    validationSchema: RegistrationSchemas,
    onSubmit: (values) => {
      fetch(
        `http://localhost/API/updateData.php`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: id,
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
        }
      )
        .then((response) => response.json())
        // .then((json) => (json));
        Navigate('/table')
    },
  });
  if (loader) {
    return <div>Loading......</div>;
  }
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
          <ButtonSubmit
            disabled={isSubmitting}
            bg="#fff"
            type="submit"
            value={"Submit"}
          />
        </div>
      </form>
  );
};

export default UpdateForm;
