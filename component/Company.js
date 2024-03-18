import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { checkImageURL } from "./utils";
import icons from "../assets/icons/location.png";

const Company = ({ companyLogo, JobTitle, companyName, Location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{JobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}/</Text>
        <Image
          resizeMode="contain"
          style={styles.locationImage}
          source={icons}
        />
        <Text style={styles.locationName}>{Location}</Text>
      </View>
    </View>
  );
};

export default Company;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  jobTitleBox: {
    marginTop: 12,
  },
  jobTitle: {
    fontSize: 20,
    color: "#312651",
    textAlign: "center",
  },
  companyInfoBox: {
    marginTop: 12 / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: 16 - 2,
    color: "#312651",
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: "#83829A",
  },
  locationName: {
    fontSize: 16 - 2,
    color: "#83829A",
    marginLeft: 2,
  },
});
