import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "@utils/theme";

const safeAreaWrapper = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      {children}
    </SafeAreaView>
  );
};

export default safeAreaWrapper;
