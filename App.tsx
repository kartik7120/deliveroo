/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Details from './screens/Details';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store';
import { Provider } from 'react-redux';

export type RootStack = {
  Home: undefined;
  Restaurant: {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: any[];
    long: number; // longitude
    lat: number;
  };
}
const Stack = createNativeStackNavigator<RootStack>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
