import React from 'react';
import { View, Pressable, Text, StatusBar, Image } from 'react-native';
import tw from 'twrnc';

export default function HomeScreen({ navigation }) {
  return (
    <View style={tw.style('flex-1 items-center justify-around bg-white')}>
      <Image source={require('../assets/logo_ethosphr.png')} />
      <View style={tw.style('flex flex-col gap-4')}>
        <Pressable onPress={() => navigation.navigate('Quizzes')}>
          <Text style={tw.style('text-xl text-white bg-green-800 rounded-lg px-10 py-3')}>
            Démarrer
          </Text>
        </Pressable>
        <Pressable>
          <Text style={tw.style('text-xl text-white bg-green-800 rounded-lg px-10 py-3')}>
            À propos
          </Text>
        </Pressable>
      </View>
      <StatusBar />
    </View>
  );
}
