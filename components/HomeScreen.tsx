import React from 'react';
import { View, Pressable, Text, StatusBar } from 'react-native';
import { styled } from 'nativewind';
import { readDb } from '../database/db';
import { questions } from '../database/schema';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

export default function HomeScreen({ navigation }) {
  // const db = await readDb();
  // const result = await db.select().from(questions);
  // console.log(result);
  // solution: declarer un state et set le state avec un useEffect
  return (
    <StyledView className="flex-1 items-center justify-around bg-white">
      <StyledText className="text-2xl bg-green-800 px-8 py-4 text-white rounded-lg">
        Étho Quiz
      </StyledText>
      <StyledView className="flex flex-col gap-4">
        <StyledPressable onPress={() => navigation.navigate('Quiz')}>
          <StyledText className="text-xl text-white bg-green-800 rounded-lg px-10 py-3">
            Démarrer
          </StyledText>
        </StyledPressable>
        <StyledPressable>
          <StyledText className="text-xl text-white bg-green-800 rounded-lg px-10 py-3">
            À propos
          </StyledText>
        </StyledPressable>
        <StyledText>
          {/* {result.map((question) => (
            <StyledText key={question.id}>{question.content}</StyledText>
          ))} */}
        </StyledText>
      </StyledView>
      <StatusBar />
    </StyledView>
  );
}
