import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white" // Set the background color of the status bar
        barStyle="dark-content" // Set the text color of the status bar (use 'light-content' for light text on a dark background)
        translucent={false} // Set to true if you want the status bar to be translucent
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "black", fontWeight: 500 }}>
          Click to Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1A55",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "yellow",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});

export default HomePage;
