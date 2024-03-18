import { StyleSheet, Text, View } from "react-native";
import React from "react";

const JobAbout = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Job:</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default JobAbout;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
  },
  headText: {
    fontSize: 20,
    color: "#312651",
  },
  contentBox: {
    marginVertical: 12,
  },
  contextText: {
    fontSize: 16 - 2,
    color: "#83829A",
    marginVertical: 12 / 1.25,
  },
});
