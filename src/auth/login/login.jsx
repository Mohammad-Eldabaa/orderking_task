import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Formik } from "formik";
import Input from "../../component/input";
import { LoginInitialValues, loginSchema } from "./loginSchema";
import { styles } from "./style";
import SubmitButton from "../../component/submitButton";
import { submitLogin } from "./submitLogin";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";

export const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={8}
    >
      <View style={styles.container}>
        <Formik
          initialValues={LoginInitialValues}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            submitLogin(values, dispatch, setSubmitting, resetForm, navigation);
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
              <Text style={styles.title}>Login</Text>

              {Object.keys(LoginInitialValues).map((value, index) => (
                <Input
                  key={index}
                  type={value}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                  forgetPassword={value === "password"}
                  onForgetPress={() => navigation.navigate("ForgetPassword")}
                />
              ))}

              <SubmitButton
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
                val={"login"}
              />

              <SubmitButton
                val={"Register"}
                handleSubmit={() => {
                  navigation.navigate("Register");
                }}
              />
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};
