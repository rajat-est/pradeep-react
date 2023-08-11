import * as Yup from "yup";
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phone = /^[1-9]\d{2}-\d{3}-\d{4}/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a Valid Email Address")
    .matches(email, "Is not in correct format")
    .required("Email is required"),
  password: Yup.string().min(6).max(10).required("Password is required"),
});
