import { store } from "../redux/store";
import { APIClient, isTokenExpire } from "../redux/APIClien";
import { clearToken } from "../redux/slice";
import { v4 } from "uuid";

export const checkToken = async (token, navigation, setNumber, setTimes) => {
  if (isTokenExpire(token)) {
    store.dispatch(clearToken());
    navigation.replace("Login");
  }
  setNumber(v4());
  setTimes((prev) => prev + 1);
  console.log("Token expired?", isTokenExpire(token));
};
