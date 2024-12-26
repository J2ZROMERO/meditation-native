import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/meditation-data";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-white mb-3 font-bold text-4xl text-left">
            Welcome person.{" "}
          </Text>
          <Text className=" text-white  text-xl font-medium ">
            Start your meditation practice today.
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id.toString()}`)}
                className="h-48 my-3 rounded-md overflow-hidden bg-slate-800 relative"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 flex  rounded-lg justify-center"
                />
                <LinearGradient
                  className="absolute top-20 h-full w-full"
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                >
                  <Text className="text-gray-100  text-3xl font-bold text-center">
                    {item.title}
                  </Text>
                </LinearGradient>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default NatureMeditate;
