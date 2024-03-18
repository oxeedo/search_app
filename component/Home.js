import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import searchIcon from "../assets/icons/search.png";
import { FlatList } from "react-native-gesture-handler";
import PopularJobs from "./PopularJobs";
import Nearbyjobs from "./Nearbyjobs";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

import Loader from "../Laoder";

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : "ca-app-pub-8590691574596211/3657115305";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Home = ({ navigation }) => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    if (searchTerm) {
      navigation.navigate("Search", { searchTerm });
    }
  };
  useEffect(() => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Replace this with your actual data loading logic
  }, []);
  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={searchIcon}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                navigation.navigate("EmploymentType", { item });
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 12 }}
          horizontal
        />
      </View>
      <PopularJobs />
      <Nearbyjobs />
      <View style={{ paddingLeft: 20, paddingTop: 50, alignContent: "center" }}>
        {loading ? (
          // Show loader while loading
          <Loader />
        ) : (
          // Render your content after loading
          <>
            {__DEV__ ? (
              <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.BANNER}
                requestOptions={{
                  requestNonPersonalizedAdsOnly: true,
                }}
              />
            ) : null}
            {/* Add your other components here */}
          </>
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 50,
    marginRight: 10,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: "#1B1A55",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: "white",
  },
  tab: (activeJobType, item) => ({
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: activeJobType === item ? "#444262" : "#83829A",
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? "#444262" : "#C1C0C8",
  }),
});
