import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Input, Icon, Box, Center, Toast } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
// import { REACT_APP_IP_ADDRESS_LOGIN } from "@env";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const ipAddress = process.env.REACT_APP_IP_ADDRESS_LOGIN;

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${ipAddress}/api/users/login`, {
        username,
        password,
      });
      console.log(response.data);
      alert(username + " is Signed In ");
      router.push("/Screens/Home");
    } catch (error) {
      console.error(error);
      alert("Error signing in: " + error);
    }
  };

  const handleRegister = () => {
    router.push("/Screens/Register");
  };

  return (
    <SafeAreaView className="flex-1 justify-center">
      <Center flex={1}>
        <Box w="90%" maxW="300px" className="gap-2">
          <Text className="text-black text-2xl font-bold underline mb-5 text-center">
            Login
          </Text>
          <Text className="text-black font-light mb-2">
            Please enter your Username & Password below
          </Text>
          <Input
            variant="filled"
            isRequired={true}
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
          <Input
            className=""
            variant="filled"
            isRequired={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="lock" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
          <TouchableOpacity className="mt-2">
            <Text
              className="w-full p-3 rounded-xl font-bold bg-[#121212] text-center text-white "
              onPress={handleLogin}
            >
              Login
            </Text>
          </TouchableOpacity>
        </Box>
        <Text className="text-center mt-2">Don't have an account? </Text>
        <View>
          <TouchableOpacity>
            <Text className="text-blue-500" onPress={handleRegister}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </Center>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
