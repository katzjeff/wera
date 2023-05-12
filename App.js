import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartingScreen from './screens/StartScreen';
import LoginPage from './screens/LoginPage';
import Register from './screens/Register';
import JobSearch from './screens/JobSearch';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="JobSearch" component={JobSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
