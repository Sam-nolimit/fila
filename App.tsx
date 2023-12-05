import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import FirstStepScreen from './src/screens/FirstStepScreen';
import HabitsScreens from './src/screens/HabitsScreens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="First"
          component={FirstStepScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Habit"
          component={HabitsScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
