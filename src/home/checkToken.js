import { store } from "../redux/store";
import { APIClient, isTokenExpire } from "../redux/APIClien";
import { clearToken } from "../redux/slice";

export const checkToken = async (token, navigation) => {
  if (isTokenExpire(token)) {
    store.dispatch(clearToken());
    navigation.replace("Login");
  }
  console.log("Token expired?", isTokenExpire(token));
};
