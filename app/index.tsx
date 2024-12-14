import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-center">
      <Stack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
    <View style={{}}>
        <Text style={styles.title}>Welcome to the React Native Blog</Text>
        <Text style={styles.title}>Made by Kidx_</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/Screens/Login")}>
          <Text style={styles.buttonText}>Start Blogging</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#121212",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 20,
    color: "#007bff",
    fontWeight: "bold",
  },
});
