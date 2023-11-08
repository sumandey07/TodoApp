import SafeAreaWrapper from "@components/shared/safeAreaWrapper";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "@utils/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import Button from "@components/shared/button";
import Animated, { ZoomIn } from "react-native-reanimated";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const LOGO =
    "https://res.cloudinary.com/sumandey/image/upload/v1699376732/logo_1_heullf.png";

  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={[
          "#ffffff",
          "#deefff",
          "#cee2ff",
          "#cee2ff",
          "#deefff",
          "#ffffff",
        ]}
        style={{ flex: 1 }}>
        <Box flex={1} justifyContent="center">
          <Box alignItems="center" mb="3.5">
            <Animated.View entering={ZoomIn.duration(2000)}>
              <Image source={{ uri: LOGO, width: 120, height: 120 }} />
            </Animated.View>
          </Box>
          <Text variant="textXl" textAlign="center" fontWeight="700">
            Do you want to be more productive?
          </Text>
          <Box my="3.5" mx="13">
            <Button
              label="Start your journey"
              onPress={navigateToSignUpScreen}
            />
          </Box>
          <Text
            variant="textXs"
            textAlign="center"
            fontWeight="700"
            color="gray5">
            Productivity at its best
          </Text>
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
