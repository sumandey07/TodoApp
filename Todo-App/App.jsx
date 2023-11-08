import Navigation from "@navigation";
import theme from "@utils/theme";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppState } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SWRConfig } from "swr";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SWRConfig
          value={{
            provider: () => new Map(),
            isVisible: () => {
              return true;
            },
            initFocus(callback) {
              let appState = AppState.currentState;

              const onAppStateChange = (nextAppState) => {
                if (
                  appState.match(/inactive|background/) &&
                  nextAppState === "active"
                ) {
                  callback();
                }
                appState = nextAppState;
              };

              const subscription = AppState.addEventListener(
                "change",
                onAppStateChange
              );

              return () => {
                subscription.remove();
              };
            },
          }}>
          <Navigation />
        </SWRConfig>
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
