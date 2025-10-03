import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(2, "please enter valid name")
    .required("please enter your name"),
  email: yup
    .string()
    .email("please enter valid email")
    .required("please enter your email"),
  password: yup
    .string()
    .min(6, "The password must be at least 6 character")
    .required("Please enter the password"),
  phone: yup
    .string()
    .matches(
      /^(010|011|012|015)\d{8}$/,
      "Please enter valid Egyptian phone number"
    )
    .required("Phone is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const RegisterInitialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirm: "",
};
