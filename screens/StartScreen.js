import React from "react";
import COLORS from "../constants/colors";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const StartingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/Happy.png")}
      />
      <Text style={styles.title}>Welcome to WERA!</Text>
      <Text style={styles.slogan}>"your AI powered job search assistant"</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonContainer]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
    backgroundColor: COLORS.background,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  slogan: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 20,
    fontStyle: "italic",
  },
  button: {
    // flex: 1,
    height: 50,
    width: "50%",
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default StartingScreen;
