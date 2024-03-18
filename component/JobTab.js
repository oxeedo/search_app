import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

const JobTab = ({ tabs, activeTab, setActiveTab }) => {
  const TabButton = ({ name, activeTab, onHandleSearchType }) => (
    <TouchableOpacity
      onPress={onHandleSearchType}
      style={styles.btn(name, activeTab)}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: 12 / 2 }}
      />
    </View>
  );
};

export default JobTab;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 12 / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: name === activeTab ? "#312651" : "#F3F4F8",
    borderRadius: 16,
    marginLeft: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "white",
  }),
  btnText: (name, activeTab) => ({
    fontSize: 12,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
  }),
});
