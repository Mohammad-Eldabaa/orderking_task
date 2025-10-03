import { useState } from "react";
import { styles } from "../login/style";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { APIClient } from "../../redux/APIClien";

export default function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: 40 }]}>Forget Password</Text>
      <TextInput
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
        autoCapitalize={"none"}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          try {
            const response = APIClient.post("auth/forget-password", {
              email,
            }).then((response) => {
              console.log(response.data);
              setEmail("");
              Alert.alert(
                "Success",
                "If the email is registered, you will receive password reset instructions."
              );
              navigation.navigate("Login");
            });
          } catch (error) {
            console.log(error);
            Alert.alert("Error", "Something went wrong. Please try again.");
          }
        }}
      >
        <Text style={styles.text}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
