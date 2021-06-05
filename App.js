import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Home, OrderDelivery, Restaurent } from './components/screens';
import { Tabs } from './navigation/tab';

const Stack =createStackNavigator()
export default function App() {
  
  return (
     <NavigationContainer>
       <Stack.Navigator  screenOptions={{
           headersShown:false
         }} initialValue={'Home'}
         >
         <Stack.Screen name="Home" component={Tabs}/>
         <Stack.Screen name="Restaurent" component={Restaurent}/>
         <Stack.Screen name="Order Delivery" component={OrderDelivery}/>
         

         
       </Stack.Navigator>
     </NavigationContainer>
  )

}
