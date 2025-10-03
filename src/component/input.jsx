import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "../auth/login/style";

export default function Input({
  touched,
  errors,
  type,
  values,
  handleChange,
  handleBlur,
  forgetPassword,
  onForgetPress,
}) {
  const config = content[type] || {};

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={config.placeholder || "Input"}
        keyboardType={config.keyboardType || "default"}
        autoCapitalize={config.autoCapitalize || "sentences"}
        secureTextEntry={config.secureTextEntry || false}
        onChangeText={handleChange(type)}
        onBlur={handleBlur(type)}
        value={values[type]}
      />

      {touched[type] && errors[type] && (
        <Text style={styles.error}>{errors[type]}</Text>
      )}

      {forgetPassword && type === "password" && (
        <TouchableOpacity onPress={onForgetPress}>
          <Text style={styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const content = {
  email: {
    placeholder: "Email",
    keyboardType: "email-address",
    autoCapitalize: "none",
  },
  password: {
    placeholder: "Password",
    secureTextEntry: true,
    autoCapitalize: "none",
  },
  phone: {
    placeholder: "Phone",
    keyboardType: "phone-pad",
    autoCapitalize: "none",
  },
  name: {
    placeholder: "Name",
    keyboardType: "default",
    autoCapitalize: "words",
  },
  passwordConfirm: {
    placeholder: "Confirm Password",
    secureTextEntry: true,
    autoCapitalize: "none",
  },
};
