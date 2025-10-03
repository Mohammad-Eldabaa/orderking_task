import { useState } from "react";
import { styles } from "../login/style";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ForgetPassword() {
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

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
