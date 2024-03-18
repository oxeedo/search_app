import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import share from "../assets/icons/share.png";

const ScreenHeaderBtnRight = () => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={share}
        resizeMode="cover"
        style={{ height: 20, width: 20 }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 12 / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ScreenHeaderBtnRight;
