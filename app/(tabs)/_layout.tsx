import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: true, // Ensures the label is displayed
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
