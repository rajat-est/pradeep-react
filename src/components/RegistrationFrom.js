import React, { useState } from "react";
import { ButtonSubmit, FormInput } from "../style/FormInput";
import { Heading } from "../style/GalleryStyle";
import { useValidationContext } from "./ValidationContext";
import { useNavigate } from "react-router-dom";
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

  //  validation Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    validation(name,value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    for (const key in data) {
      if (key !== "gender") {
        const isValid = validation(key, data[key]);
        if (!isValid) {
          return;
        }
      }
    }
    setFormData((prevFormData) => [...prevFormData, data]);
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
    console.log("validation");
    let valid = true;
    const letters =/^[a-z][a-z\s]*$/i;
    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const dateOfBirth = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
    const regex = {
      name: letters,
      lname: letters,
      email: email,
      dateOfBirth: dateOfBirth,
    };
    if (value === "") {
      setErrors((prevState) => {
        return { ...prevState, [key]: "Please Enter Your" + key };
      });
      valid = false;
    } else if (!regex[key].test(value)) {
      setErrors((prevState) => {
        return { ...prevState, [key]: "Please enter valid " + key };
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
          <Heading m="0  0 2rem 0">Ragistion Form</Heading>
          <label htmlFor="inputFname"> First Name</label>
          <FormInput
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formValue.name}
            id="inputFname"
            onChange={handleChange}
          />
          <span className="errors">{errors.name}</span>
          <label htmlFor="inputLname"> Last Name</label>
          <FormInput
            type="text"
            name="lname"
            placeholder="Enter Your Last Name"
            value={formValue.lname}
            id="inputLname"
            onChange={handleChange}
          />
          <span className="errors">{errors.lname}</span>
          <label htmlFor="inputEmail">Email</label>
          <FormInput
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={formValue.email}
            id="inputEmail"
            onChange={handleChange}
          />
          <span className="errors">{errors.email}</span>
          <label htmlFor="inputDateOfBirth">Date of Birth</label>
          <FormInput
            type="text"
            name="dateOfBirth"
            placeholder="DD/MM/YY"
            value={formValue.dateOfBirth}
            id="inputDateOfBirth"
            onChange={handleChange}
          />
          <span className="errors">{errors.dateOfBirth}</span>
          <select
            name="gender"
            id="selectGender"
            value={"lovjowv"}
            onChange={(e) =>
              setFormValue({ ...formValue, [e.target.name]: e.target.value })
            }
          >
            <option selected > Please Slect Your Genter</option>
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
