import React, { Component } from 'react';
import WelcomePageContainer from './containers/WelcomePageContainer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePageContainer from './containers/HomePageContainer';

const Stack = createStackNavigator();

class Friendo extends Component {
  render() {
    return ( 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Friendo" >
            <Stack.Screen name="Friendo" component={WelcomePageContainer} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} /> 
            <Stack.Screen name="Home" component={HomePageContainer} /> 
          </Stack.Navigator>
        </NavigationContainer>
    )
  }

}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  
  }
})
export default Friendo;


