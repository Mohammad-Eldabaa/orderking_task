import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../auth/login/style";
import QRCode from "react-native-qrcode-svg";
import { v4 } from "uuid";
import { checkToken } from "./checkToken";
import { useSelector } from "react-redux";

export default function HomePage({ navigation }) {
  const [number, setNumber] = useState(v4());
  const [times, setTimes] = useState(1);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    const interval = setInterval(() => {
      checkToken(token, navigation, setNumber, setTimes);
    }, 60000);
  }, []);
  return (
    <View
      style={[
        styles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={[styles.title, { fontSize: 24 }]}>
        Number of times the QR change {times}
      </Text>
      <View
        style={{
          borderWidth: 8,
          padding: 20,
          borderRadius: 10,
          borderColor: "#13658fff",
        }}
      >
        <QRCode
          size={250}
          color="#0b75aaff" // QR code color
          backgroundColor="#ffffff"
          value={number}
        />
      </View>
    </View>
  );
}
