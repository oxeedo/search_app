import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import Nearbyjobscard from "./Nearbyjobscard";
import useFetch from "../hook/Fetch";
import { useNavigation } from "@react-navigation/native";

const EmploymentType = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: "1",
  });

  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Nearbyjobscard
            item={item}
            handleNavigate={() =>
              navigation.navigate("JobDetails", { itemId: item?.job_id })
            }
          />
        )}
        keyExtractor={(item) => item?.job_id}
        contentContainerStyle={{ columnGap: 16 }}
      />
    </View>
  );
};

export default EmploymentType;

const styles = StyleSheet.create({});
