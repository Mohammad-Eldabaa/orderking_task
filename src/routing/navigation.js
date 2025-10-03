import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginPage } from "../auth/login/login";
import { RegisterPage } from "../auth/register/register";
import ForgetPassword from "../auth/forgetpassword/forgetPassword";
import HomePage from "../home/home";

const { Navigator, Screen } = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Login" component={LoginPage} />
        <Screen name="Register" component={RegisterPage} />
        <Screen name="ForgetPassword" component={ForgetPassword} />
        <Screen name="Home" component={HomePage} />
      </Navigator>
    </NavigationContainer>
  );
}
