import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";

import Home from "./component/Home";
import JobDetails from "./component/utils/JobDetails";

import ScreenHeaderBtnRight from "./component/ScreenHeaderBtnRight";
import Search from "./component/search/Search";
import EmploymentType from "./component/EmploymentType";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="JobDetails"
          component={JobDetails}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerRight: () => <ScreenHeaderBtnRight />,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerStyle: { backgroundColor: "#FAFAFC" },
            headerShadowVisible: false,

            headerTitle: "",
            headerRight: () => <ScreenHeaderBtnRight />,
          }}
        />
        <Stack.Screen
          name="EmploymentType"
          component={EmploymentType}
          options={{
            headerStyle: { backgroundColor: "#FAFAFC" },
            headerShadowVisible: false,

            headerTitle: "",
            headerRight: () => <ScreenHeaderBtnRight />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
