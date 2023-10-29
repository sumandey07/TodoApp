import { StyleSheet } from "react-native";
import React from "react";
import { Text, Box } from "@utils/theme";

const Button = () => {
  return (
    <Box bg="primary" p="3" borderRadius="rounded-3xl">
      <Text variant="textBase" color="white">
        Button
      </Text>
    </Box>
  );
};

export default Button;
