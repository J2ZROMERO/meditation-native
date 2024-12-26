import "../global.css";

import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import MEDITATION_IMAGES from "@/constants/meditation-images";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[0]}
        resizeMode="cover"
        className=" flex-1 bg-"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-3 justify-between ">
            <View>
              <Text className=" text-center text-white font-bold mb-5">
                Simple Meditation
              </Text>
              <Text className="text-center text-white ">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Let's get started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
