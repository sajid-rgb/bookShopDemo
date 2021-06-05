import React from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";


import {COLORS} from '../../constants/theme'

import { FoodInfo } from "../FoodInfo/FoodInfo";
import { Order } from "../Order/Order";
import { RestaurantHeader } from "../RestaurantHeader/RestaurantHeader";


export const Restaurent = ({ route, navigation }) => {

  
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHeader route={route} />
      <FoodInfo route={route} />
      <Order route={route}/>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2
  }
})

export default Restaurent;