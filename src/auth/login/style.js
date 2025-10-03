import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#3cace8ff",
    width: "100%",
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  error: {
    color: "red",
    marginLeft: 5,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#007BFF",
    textAlign: "center",
    // marginTop: -160,
    marginBottom: 62,
  },
  forgetPassword: {
    color: "#0c73abff",
    marginLeft: 8,
  },
});
