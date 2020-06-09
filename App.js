import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Home from './components/Home'
import Search from './components/Recherche'
import Header from './components/headers/Header'

const Stack = createStackNavigator()

export default class App extends Component {
  constructor(props) {
    super(props)
}

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Search'   
          screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Header" component={Header} />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
