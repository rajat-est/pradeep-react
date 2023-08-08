import React, { useState } from "react";
import { ButtonSubmit, FormInput } from "../style/FormInput";
import { Heading } from "../style/GalleryStyle";
import { useValidationContext } from "./ValidationContext";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const RegistrationFrom = () => {
  const { setFormData, formData } = useValidationContext();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    lname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    lname: "",
    email: "",
    dateOfBirth: "",
  });
  const letters = /^[a-z][a-z\s]*$/i;
  const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const dateOfBirth =
    /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
  const regex = {
    name: letters,
    lname: letters,
    email: email,
    dateOfBirth: dateOfBirth,
  };

  //  validation Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    validation(name, value);
  };
  const handleDateChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    dateValidation(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const requiredRegexFields = ["gender", "dateOfBirth"];
    let isValid = true;
    for (const key in data) {
      if (!requiredRegexFields.includes(key)) {
        const valid = validation(key, data[key]);
        isValid = isValid && valid;
      }
    }
    const dateValid = dateValidation("dateOfBirth", data.dateOfBirth);
    isValid = isValid && dateValid;
    if (!isValid) {
      return;
    }
    setFormData([...formData, data]);
    setFormValue({
      name: "",
      lname: "",
      email: "",
      dateOfBirth: "",
      gender: "",
    });
    navigate("/table");
  };

  const validation = (key, value) => {
    let valid = true;
    if (value === "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          [key]: `Please Enter Your ${key === "name" ? "First Name" : ""}  ${
            key === "lname" ? "Last Name" : ""
          }   ${key === "email" ? "Email" : ""}`,
        };
      });
      valid = false;
    } else if (!regex[key].test(value)) {
      setErrors((prevState) => {
        return {
          ...prevState,
          [key]: `Please Enter Valid ${key === "name" ? "First Name" : ""}  ${
            key === "lname" ? "Last Name" : ""
          }   ${key === "email" ? "Email" : ""}`,
        };
      });
      valid = false;
    } else {
      setErrors((prevState) => {
        return { ...prevState, [key]: "" };
      });
    }
    return valid;
  };
  // Date field Validation
  const dateValidation = (key, value) => {
    const card_date = value.split("/");
    const month = parseInt(card_date[1]);
    const year = parseInt(card_date[2]);
    const d = new Date();
    const currentYear = d.getFullYear();
    const currentMonth = d.getMonth();
    let valid = true;
    if (value === "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          [key]: `Please Enter Your ${
            key === "dateOfBirth" ? "Date Of Birth" : ""
          }`,
        };
      });
      valid = false;
    } else if (!regex[key].test(value)) {
      setErrors((prevState) => {
        return {
          ...prevState,
          [key]: `Please Enter Valid ${
            key === "dateOfBirth" ? "Date Of Birth" : ""
          }`,
        };
      });
      valid = false;
    } else if (
      !(currentYear < year || (currentYear === year && currentMonth < month))
    ) {
      setErrors((prevState) => {
        return {
          ...prevState,
          [key]: `Please Enter Valid ${
            key === "dateOfBirth" ? "Date Of Birth" : ""
          }`,
        };
      });
      valid = false;
    } else {
      setErrors((prevState) => {
        return { ...prevState, [key]: "" };
      });
    }
    return valid;
  };
  return (
    <>
      <form name="FormData" onSubmit={(e) => handleSubmit(e)}>
        <div className="FormMain">
          <Heading m="0  0 2rem 0">REGISTRATION FORM</Heading>
          <Input
            label="First Name"
            handleChange={handleChange}
            errors={errors.name}
            name="name"
            placeholder="Enter Your First Name"
            id="inputLname"
          />
          <Input
            label="Last Name"
            handleChange={handleChange}
            errors={errors.lname}
            name="lname"
            placeholder="Enter Your Last Name"
            id="inputLname"
          />
          <Input
            label="Email"
            handleChange={handleChange}
            errors={errors.email}
            name="email"
            placeholder="Enter Your Email"
            id="inputEmail"
            value={formValue.email}
          />
          <Input
            label="Date Of Birth"
            errors={errors.dateOfBirth}
            name="dateOfBirth"
            placeholder="DD/MM/YY"
            id="inputDateOfBirth"
            value={formValue.dateOfBirth}
            handleChange={handleDateChange}
          />
          <label> Please Select Your Genter</label>
          <select
            name="gender"
            id="selectGender"
            value={formValue.gender}
            onChange={(e) =>
              setFormValue({ ...formValue, [e.target.name]: e.target.value })
            }
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <ButtonSubmit bg="#fff" type="submit" value={"Submit"} />
        </div>
      </form>
    </>
  );
};

export default RegistrationFrom;
