import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useState } from "react";
import PopularJobsCard from "./PopularJobsCard";
import useFetch from "../hook/Fetch";
import { useNavigation } from "@react-navigation/native";

const PopularJobs = () => {
  const [selectedJob, setSelectedJob] = useState();
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  // console.log(data);
  const handleCardPress = (item) => {
    navigation.navigate("JobDetails", { itemId: item?.job_id });
    setSelectedJob(item.job_id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PopularJobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#312651" />
        ) : error ? (
          <Text>Something is wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobsCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: 16 }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginLeft: 20,
    paddingRight: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "#312651",
  },
  headerBtn: {
    fontSize: 16,
    color: "#83829A",
  },
  cardsContainer: {
    marginTop: 16,
  },
});
