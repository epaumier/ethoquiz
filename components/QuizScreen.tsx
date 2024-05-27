import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, StatusBar, Image } from 'react-native';
import tw from 'twrnc';
import { readDb } from '../database/db';
import { Question, Quizz, questions, answers, quizzes, Answer } from '../database/schema';

export default function QuizScreen({ route, navigation }) {
  const { quizId } = route.params;
  const [questionIndex, setQuestionIndex] = useState(2);
  const [questionsData, setQuestionsData] = useState<Question[]>([]);
  const [answersData, setAnswersData] = useState<Answer[]>([]);

  useEffect(() => {
    async function fetchDb() {
      const db = await (await readDb()).select().from(questions);
      const ad = await (await readDb()).select().from(answers);

      setQuestionsData(db);
      setAnswersData(ad);
    }
    fetchDb();
  }, []);

  function onClickAnswer(quiz: Answer) {
    if (quiz.correct) {
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log('wrong');
    }
  }
  console.log(questionIndex);
  console.log(answersData.filter((a) => a.questionId === 4));

  return (
    <View style={tw.style('flex-1 items-center justify-around bg-white')}>
      {!questionsData[questionIndex] && <Text>...loading</Text>}
      {questionsData[questionIndex] && questionsData[questionIndex].media && (
        <>
          <Text style={tw.style('text-2xl bg-green-800 px-8 py-4 text-white rounded-lg')}>
            {questionsData[questionIndex].content}
          </Text>
          <Image
            source={{ uri: questionsData[questionIndex].media?.path }}
            style={tw.style('w-64 h-64')}
          />
          <Text>questionsData[questionIndex].id {questionsData[questionIndex].id}</Text>
        </>
      )}
      <View style={tw.style('flex flex-col gap-4')}>
        {answersData
          .filter((a) => questionsData[questionIndex].id === a.questionId)
          .map((answer) => (
            <Pressable key={answer.id} onPress={() => onClickAnswer(answer)}>
              <Text>answer.questionId {answer.questionId}</Text>
              <Text style={tw.style('text-xl text-white bg-green-800 rounded-lg px-10 py-3')}>
                {answer.content}
              </Text>
            </Pressable>
          ))}
      </View>
      <StatusBar />
    </View>
  );
}
