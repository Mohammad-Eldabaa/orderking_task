import { Alert } from "react-native";
import { APIClient } from "../../redux/APIClien";

export async function submitRegister(
  values,
  setSubmitting,
  resetForm,
  navigation
) {
  try {
    setSubmitting(true);

    const response = await APIClient.post("/auth/register", {
      name: values.name,
      phone: values.phone,
      address: values.address,
      email: values.email,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
    });

    console.log("Register successful:", response.data);
    navigation.navigate("Login");
    resetForm();
  } catch (error) {
    console.error("Register error:", error);

    const errorMessage = error.response?.data?.message || error.message;
    showAlert("Login Error", errorMessage);
  } finally {
    setSubmitting(false);
  }
}

const showAlert = (title, message) => {
  Alert.alert(title, message);
};
