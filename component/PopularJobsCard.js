import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { checkImageURL } from "./utils";

const PopularJobsCard = ({ selectedJob, item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobsCard;

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    padding: 24,
    backgroundColor: selectedJob === item.job_id ? "#312651" : "#FFF",
    borderRadius: 16,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : "black",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: 16,
    color: "#B3AEC6",
    marginTop: -5,
  },
  infoContainer: {
    marginTop: 5,
  },
  jobName: (selectedJob, item) => ({
    fontSize: 16,
    color: selectedJob === item.job_id ? "white" : "#312651",
  }),
  location: {
    fontSize: 16,
    color: "#B3AEC6",
  },
});
