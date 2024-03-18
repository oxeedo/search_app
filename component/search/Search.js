import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { checkImageURL } from "../../component/utils/index.js";
import Nearbyjobscard from "../Nearbyjobscard.js";

const Search = ({ route }) => {
  const { searchTerm } = route.params;
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    headers: {
      "X-RapidAPI-Key": "b560532ef7msh7bca1dcbb6b496ap16b0afjsn373f25704fd1",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      query: searchTerm,
      page: "1",
      num_pages: "1",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setSearchResults(response.data.data);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <SafeAreaView>
      <View style={{ marginLeft: 10 }}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Error: {error.message}</Text>
        ) : (
          <FlatList
            data={searchResults}
            keyExtractor={(_item, index) => index.toString()} // Use index as key if item.id is not available
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity style={styles.logoContainer}>
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
                  <Text style={styles.jobName}>{item.job_title}</Text>
                  <Text style={styles.location}>{item.job_country}</Text>
                  <Text style={styles.description}>{item.job_description}</Text>
                  <Text style={styles.googleLink}>{item.job_google_link}</Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 16,
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 12 / 2,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
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
  jobName: {
    fontSize: 16,
  },
  location: {
    fontSize: 16,
    color: "#B3AEC6",
  },
  description: {
    fontSize: 16,
  },
  googleLink: {
    fontSize: 12,
  },
});

export default Search;
