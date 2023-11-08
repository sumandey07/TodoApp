import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "@screens/homeScreen";
import EditTaskScreen from "@screens/editTaskScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="EditTask"
        options={{
          headerShown: false,
        }}
        component={EditTaskScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
