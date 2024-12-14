import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Box, Center, Icon, Input } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import { useRouter } from "expo-router";
// import { REACT_APP_IP_ADDRESS_LOGIN } from "@env";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const ipAddress = process.env.REACT_APP_IP_ADDRESS_REGISTER

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${ipAddress}/api/users/register`,
        { username, email, password }
      );
      console.log(response.data);
      alert("Registration successful");
      router.push("/Screens/Home");
    } catch (error) {
      console.error(error);
      alert("Error registering: " + {username} + error);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center">
      <Center flex={1}>
        <Box w="90%" maxW="300px" className="gap-2">
          <Text className="text-black text-2xl font-bold underline mb-5 text-center">
            Register
          </Text>
          <Text className="text-black font-light mb-2 text-center">
            Please enter a Username, Email, & Password below
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
            variant="filled"
            isRequired={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="email" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
          <Input
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
          <TouchableOpacity className="mt-2" onPress={handleRegister}>
            <Text className="w-full p-3 rounded-xl font-bold bg-[#121212] text-center text-white ">
              Register
            </Text>
          </TouchableOpacity>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
