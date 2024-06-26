import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, StatusBar } from 'react-native';
import tw from 'twrnc';
import { readDb } from '../database/db';
import { Quizz, quizzes } from '../database/schema';

export default function QuizzesScreen({ navigation }) {
  const [quizzesData, setQuizzesData] = useState<Quizz[]>([]);

  useEffect(() => {
    async function fetchDb() {
      const db = await (await readDb()).select().from(quizzes);
      setQuizzesData(db);
    }
    fetchDb();
  }, []);
  return (
    <View style={tw.style('flex-1 items-center justify-around bg-white')}>
      <View style={tw.style('flex w-3/4 flex-col gap-4')}>
        {quizzesData.map((quiz) => (
          <Pressable key={quiz.id} onPress={() => navigation.navigate('Quiz', { quizId: quiz.id })}>
            <Text
              style={tw.style('text-xl  text-center text-white bg-green-800 rounded-lg px-10 py-3')}
            >
              {quiz.title}
            </Text>
          </Pressable>
        ))}
      </View>
      <StatusBar />
    </View>
  );
}
