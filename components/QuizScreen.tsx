import React, { useEffect, useRef, useState } from 'react';
import { View, Pressable, Text, StatusBar, Image, Button } from 'react-native';
import tw from 'twrnc';
import { readDb } from '../database/db';
import { Question, questions, answers, Answer } from '../database/schema';
import images from '../images';
import { Video, ResizeMode } from 'expo-av';

export default function QuizScreen({ route, navigation }) {
  const ref = useRef(null);
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);
  const { quizId } = route.params;
  const [questionIndex, setQuestionIndex] = useState(2);
  const [errorCount, setErrorCount] = useState(0);
  const [isQuestionDone, setIsQuestionDone] = useState(false);
  const [choices, setChoices] = useState<number[]>([]);
  const [questionsData, setQuestionsData] = useState<Question[]>([]);
  const [answersData, setAnswersData] = useState<Answer[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => nextQuestion()} disabled={!isQuestionDone} title="Suivant" />
      ),
    });
  }, [navigation, isQuestionDone]);

  useEffect(() => {
    async function fetchDb() {
      const db = await (await readDb()).select().from(questions);
      const ad = await (await readDb()).select().from(answers);

      setQuestionsData(db);
      setAnswersData(ad);
    }
    fetchDb();
    setIsQuestionDone(false);
    setErrorCount(0);
    setChoices([]);
  }, []);

  function onClickAnswer(quiz: Answer) {
    setChoices([...choices, quiz.id]);
    if (quiz.correct) {
      setIsQuestionDone(true);
    } else {
      setErrorCount(errorCount + 1);
    }
  }

  function nextQuestion() {
    setQuestionIndex(questionIndex + 1);
    setIsQuestionDone(false);
    setChoices([]);
  }

  return (
    <View style={tw.style('flex-1 items-center justify-around bg-white')}>
      {/* loading state */}
      {!questionsData[questionIndex] && questionsData.length !== questionIndex && (
        <Text>...loading</Text>
      )}

      {/* end of quiz */}
      {questionsData.length === questionIndex && (
        <>
          <Text>Bravo ! Vous avez terminé le Quiz</Text>
          <Text>Erreur(s): {errorCount}</Text>
        </>
      )}

      {/* question */}
      {questionsData[questionIndex] && questionsData[questionIndex].media && (
        <>
          <Text style={tw.style('text-2xl bg-green-800 px-8 py-4 text-white rounded-lg')}>
            {questionsData[questionIndex].content}
          </Text>
          {questionsData[questionIndex].media?.path.substring(
            (questionsData[questionIndex].media?.path.length ?? 0) - 3
          ) === 'png' && (
            <Image source={images.catQuiz[questionIndex]} style={tw.style('w-64 h-64')} />
          )}
          {questionsData[questionIndex].media?.path.substring(
            (questionsData[questionIndex].media?.path.length ?? 0) - 3
          ) === 'mp4' && (
            <Video
              ref={video}
              style={{ width: 300, height: 300 }}
              source={images.catQuiz[questionIndex]}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          )}
        </>
      )}

      {/* answers */}
      {questionsData.length !== questionIndex && (
        <View style={tw.style('flex gap-4')}>
          {answersData
            .filter((a) => questionsData[questionIndex].id === a.questionId)
            .map((answer) => (
              <View style={tw.style('flex')}>
                <Pressable key={answer.id} onPress={() => onClickAnswer(answer)}>
                  <Text
                    style={tw.style(
                      `text-xl border text-center border-1 border-green-800 bg-gray-100 rounded-lg px-10 py-3
                      ${choices.includes(answer.id) && !answer.correct ? 'bg-red-800 text-white' : ''}
                      ${choices.includes(answer.id) && answer.correct ? 'bg-green-800 text-white' : ''}
                    `
                    )}
                  >
                    {answer.content}
                  </Text>
                </Pressable>
              </View>
            ))}
        </View>
      )}

      <StatusBar />
    </View>
  );
}
