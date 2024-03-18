import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const ScreenHeaderBtn = ({ iconUrl, dimension, handleSignOut }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handleSignOut}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 12 / 1.25,
  }),
});
export default ScreenHeaderBtn;
