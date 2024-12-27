import { View, Text, Pressable } from "react-native";
import { useContext } from "react";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);
  function handlePress(duration: number) {
    setDuration(duration);
    router.back();
  }
  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Pressable onPress={() => router.back()}>
          <AntDesign name="leftcircleo" size={50} color={"white"} />
        </Pressable>
        <View className="justify-center flex-1">
          <Text className="text-center font-bold text-3xl text-white mb-6">
            Ajust your meditation duration
          </Text>
        </View>
        <View className="gap-3">
          <CustomButton
            title="10 seconds"
            onPress={() => handlePress(10)}
            containerStyles=""
          />
          <CustomButton title="5 minutes" onPress={() => handlePress(5 * 60)} />
          <CustomButton
            title="10 minutes"
            onPress={() => handlePress(15 * 60)}
            containerStyles=""
          />

          <CustomButton
            title="15 minutes"
            onPress={() => handlePress(15 * 60)}
            containerStyles=""
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
