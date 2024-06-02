import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import QuizzesScreen from './components/QuizzesScreen';
import QuizScreen from './components/QuizScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Etho'Quiz"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white' },
            headerStyle: { backgroundColor: '#303030' },
          }}
        />
        <Stack.Screen
          name="Quizzes"
          component={QuizzesScreen}
          options={{
            title: 'les quizs',
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white' },
            headerStyle: { backgroundColor: '#303030' },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            title: 'Quiz',
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white' },
            headerStyle: { backgroundColor: '#303030' },
            headerTintColor: 'white',
            headerRight: () => (
              <Button
                onPress={() => console.log('This is a button!')}
                title="suivant"
                color="#fff"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
