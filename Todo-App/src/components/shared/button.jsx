import React from "react";
import { Text, Box } from "@utils/theme";
import { Pressable } from "react-native";

const Button = ({ label, onPress, onLongPress, disabled, uppercase }) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <Box
        borderRadius="rounded-7xl"
        py="4"
        bg={disabled ? "gray800" : "primary"}>
        <Text
          variant="textXs"
          textAlign="center"
          textTransform={uppercase ? "uppercase" : "none"}
          fontWeight="700"
          color="white">
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;
