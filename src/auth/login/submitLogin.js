import { Alert } from "react-native";
import { APIClient } from "../../redux/APIClien";
import { setToken } from "../../redux/slice";

export async function submitLogin(
  values,
  dispatch,
  setSubmitting,
  resetForm,
  navigation
) {
  try {
    console.log("Submitting login with values:", values);
    setSubmitting(true);

    const response = await APIClient.post("/auth/login", {
      email: values.email,
      password: values.password,
    });

    console.log("Login response:", response.data);

    // Save token in Redux
    if (response.data?.accessToken) {
      dispatch(setToken(response.data.accessToken));
    }

    navigation.navigate("Home");
    resetForm();
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);

    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";
    showAlert("Login Error", errorMessage);
  } finally {
    setSubmitting(false);
  }
}

const showAlert = (title, message) => {
  Alert.alert(title, message);
};
