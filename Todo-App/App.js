import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "@components/button";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import { ThemeProvider } from "@shopify/restyle";
import * as SplashScreen from "expo-splash-screen";
import theme, { Text } from "@utils/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Light: require("./assets/fonts/Poppins-Light.ttf"),
    ExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    Thin: require("./assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text variant="textBase">
          Open up App.js to start working on your app!
        </Text>
        <Button />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
