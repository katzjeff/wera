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
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: COLORS.mainText
  },
  slogan: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 20,
    fontStyle: "italic",
    color: COLORS.tagText
  },
  button: {
    // flex: 1,
    height: 50,
    width: "50%",
    backgroundColor: COLORS.background,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
});

export default StartingScreen;
