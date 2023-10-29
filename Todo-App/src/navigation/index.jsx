import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStackNavigator from "./authStackNavigator";

const Navigation = () => {
  const user = true;
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
