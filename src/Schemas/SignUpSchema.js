import * as Yup from "yup";
const letters = /^[a-z][a-z\s]*$/i;
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phone = /^[1-9]\d{2}-\d{3}-\d{4}/;

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(25)
    .matches(letters, "Is not in correct format")
    .required("First Name is required"),
  lname: Yup.string()
    .min(2)
    .max(25)
    .matches(letters, "Is not in correct format")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Please Enter a Valid Email Address")
    .matches(email, "Is not in correct format")
    .required("Email is required"),
    phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be a 10-digit number')
    .required('Phone number is required'),
  password: Yup.string().min(6).max(10).required("Password is required"),
  confPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
