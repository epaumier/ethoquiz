import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function App() {
  return (
  <View className="flex-1 items-center justify-around bg-white">
      <Text className="text-2xl bg-green-800 px-8 py-4 text-white rounded-lg">Étho Quiz</Text>
      <View className="flex flex-col gap-4">
        <Pressable>
          <Text className="text-xl text-white bg-green-800 rounded-lg px-10 py-3">Démarrer</Text>
        </Pressable>
        <Pressable>
          <Text className="text-xl text-white bg-green-800 rounded-lg px-10 py-3">À propos</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
