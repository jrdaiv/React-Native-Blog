import { NativeBaseProvider } from "native-base";
import { Slot } from "expo-router";
import '../global.css'

export default function App() {
  return (
    <NativeBaseProvider>
      <Slot />
    </NativeBaseProvider>
  );
}
