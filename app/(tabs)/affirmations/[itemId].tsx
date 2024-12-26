import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [phrases, setPrases] = useState<string[]>([]);

  useEffect(() => {
    for (const gallery of AFFIRMATION_GALLERY) {
      const found = gallery.data.find((item) => item.id === Number(itemId));
      if (found) {
        setAffirmation(found);
        setPrases(found.text.split("."));
        break;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={{
          uri: "https://drive.google.com/uc?id=1iXnGK0IthDRjWoeJq3qTM5Nm01tWE2WC",
        }}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={24} color="white" />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              {phrases.map((p) => (
                <Text
                  key={p}
                  className="text-white  text-2xl text-center text-bold mb-12 justify-center"
                >
                  {p}.
                </Text>
              ))}
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
