import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icons from "@components/shared/icons";
import HomeStackNavigator from "./homeStackNavigator";
import CompletedScreen from "../screens/completedScreen";
import TodayScreen from "../screens/todayScreen";
import CategoriesStackNavigator from "./categoriesStackNavigator";
import { useTheme } from "@shopify/restyle";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeStack"
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => <Icons name="home" color={color} />,
          headerShown: false,
        })}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="Completed"
        options={() => ({
          title: "Completed",
          tabBarIcon: ({ color }) => <Icons name="completed" color={color} />,
          headerShown: false,
        })}
        component={CompletedScreen}
      />
      <Tab.Screen
        name="Today"
        options={() => ({
          title: "Today",
          tabBarIcon: ({ color }) => <Icons name="calendar" color={color} />,
          headerShown: false,
        })}
        component={TodayScreen}
      />
      <Tab.Screen
        name="CategoriesStack"
        options={() => ({
          title: "Categories",
          tabBarIcon: ({ color }) => <Icons name="categories" color={color} />,
          headerShown: false,
        })}
        component={CategoriesStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
