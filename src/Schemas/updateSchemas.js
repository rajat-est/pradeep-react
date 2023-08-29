import * as Yup from "yup";
const letters = /^[a-z][a-z\s]*$/i;
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const dateOfBirth =
  /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
export const updateSchemas = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(25)
    .matches(letters, "Is not in correct format")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2)
    .max(25)
    .matches(letters, "Is not in correct format")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Please Enter a Valid Email Address")
    .matches(email, "Is not in correct format")
    .required("Email is required"),
  dateOfBirth: Yup.string()
    .matches(new RegExp(dateOfBirth), "Is not in correct format")
    .required("Date of Birth is required")
    .nullable(),
    mobile:Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be a 10-digit number')
    .required('Phone number is required'),
});
