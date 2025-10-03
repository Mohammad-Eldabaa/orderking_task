import { store } from "../redux/store";
import { isTokenExpire } from "../redux/APIClien";
export const checkToken = async (token) => {
  if (isTokenExpire(token)) {
    store.dispatch(clearToken());
    window.location.replace("/Login");
  }
  console.log(isTokenExpire(token));
};
