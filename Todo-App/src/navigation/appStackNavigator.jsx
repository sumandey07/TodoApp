import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabNavigator from "./bottomTabNavigator";

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        options={{
          headerShown: false,
        }}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
