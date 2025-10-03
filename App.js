import { Provider } from "react-redux";
import AppNavigation from "./src/routing/navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
    // </SafeAreaView>
  );
}
