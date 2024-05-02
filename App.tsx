import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import QuizzScreen from './components/QuizzScreen';
import { Text } from 'react-native';
import { readDb } from './database/db';

readDb();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Bienvenue' }} />
        {/* <Stack.Screen
          name="Quiz"
          component={QuizzScreen}
          options={{ title: 'Choisissez un quiz' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <HomeScreen />
      {/* <Text>test</Text> */}
    </Suspense>
  );
}
