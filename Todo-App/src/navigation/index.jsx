import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import AppStackNavigator from "./appStackNavigator";
import UserGlobalStore from "@store/userGlobalStore";
import AuthStackNavigator from "./authStackNavigator";

const Navigation = () => {
  const { user, updateUser } = UserGlobalStore();

  console.log(`user`, JSON.stringify(user, null, 2));

  useEffect(() => {
    updateUser(null);
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
