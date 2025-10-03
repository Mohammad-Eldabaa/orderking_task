import { View, Text } from "react-native";
import { Formik } from "formik";
import Input from "../../component/input";
import { RegisterInitialValues, registerSchema } from "./registerSchema";
import SubmitButton from "../../component/submitButton";
import { styles } from "../login/style";
import { submitRegister } from "./submitRegister";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const RegisterPage = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={16}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Formik
          initialValues={RegisterInitialValues}
          validationSchema={registerSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            submitRegister(values, resetForm, setSubmitting, navigation);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <View>
              <Text style={styles.title}>Register</Text>

              {Object.keys(RegisterInitialValues).map((value, index) => (
                <Input
                  key={index}
                  type={value}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
              ))}

              <SubmitButton
                val="Register"
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
              />
              <SubmitButton
                val="Login"
                handleSubmit={() => navigation.navigate("Login")}
              />
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};
