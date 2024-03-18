import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Specifics = ({ points, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: "#312651",
  },
  pointsContainer: {
    marginVertical: 12,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 12 / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#C1C0C8",
    marginTop: 6,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 12 / 1.25,
  },
  pointText: {
    fontSize: 16 - 2,
    color: "#83829A",
    marginLeft: 12,
  },
});
