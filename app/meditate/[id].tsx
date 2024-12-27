import { View, Text, ImageBackground, Pressable } from "react-native";
import { useContext, useEffect, useState } from "react";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data";
import { TimerContext } from "@/context/TimerContext";

const Meditate = () => {
  const { duration, setDuration } = useContext(TimerContext);
  const { id } = useLocalSearchParams();
  // const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setMeditating] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState<Boolean>();

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (duration == 0) {
      setMeditating(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(duration - 1);
      }, 1000);
    }

    if (duration == 1) {
      audioSound?.unloadAsync();
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [duration, isMeditating]);

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  // Format the timeLeft to ensure two digits are displayed
  const formattedTimeMinutes = String(Math.floor(duration / 60)).padStart(
    2,
    "0"
  );
  const formattedTimeSeconds = String(duration % 60).padStart(2, "0");

  const toggleMeditationSessionStatus = async () => {
    await toggleSound();
    if (duration == 0) setDuration(10);
    setMeditating(!isMeditating);
  };

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();
    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlayingAudio) {
      await sound.playAsync();
      setPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setPlayingAudio(false);
    }
  };
  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const cleanDot = audioFileName.split(".")[0];
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[cleanDot]);
    setAudioSound(sound);
    return sound;
  };
  function handleAdjustduration() {
    if (isMeditating) toggleMeditationSessionStatus();
    router.push("/(modal)/adjust-meditation-duration");
  }
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[id - 1]}
        resizeMode="cover"
        className="flex-1">
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10">
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center ">
            <View className="mx-auto w-1/2 bg-neutral-200 justify-center items-center rounded-full p-5 ">
              <Text className="text-4xl font-rmono text-blue-800">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton
              title="Adjust Duration"
              onPress={handleAdjustduration}
            />
            <CustomButton
              title="Start Meditation"
              onPress={toggleMeditationSessionStatus}
              containerStyles="mt-5"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
