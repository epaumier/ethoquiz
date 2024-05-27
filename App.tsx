import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import QuizzesScreen from './components/QuizzesScreen';
import QuizScreen from './components/QuizScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Quizzes"
          component={QuizzesScreen}
          options={{ title: "Retour à l'accueil" }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ title: 'Retour à la liste des quiz' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
