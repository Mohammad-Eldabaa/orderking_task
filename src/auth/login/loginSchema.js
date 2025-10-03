import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("please enter valid email")
    .required("please enter your email"),
  password: yup
    .string()
    .min(6, "The password must be at least 6 character")
    .required("Please enter the password"),
});

export const LoginInitialValues = { email: "", password: "" };
