import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../auth/login/style";

export default function SubmitButton({ val, handleSubmit, isSubmitting }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={isSubmitting}
      >
        <Text style={styles.text}>{isSubmitting ? "Submitting..." : val}</Text>
      </TouchableOpacity>
    </View>
  );
}
