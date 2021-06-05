import React from "react";
import {
  SafeAreaView,
    StyleSheet,

} from "react-native";
import {MainCategory} from '../MainCategory/MainCategory'
import icons from "../../constants/icons";
import images from "../../constants/images";
import { SIZES, COLORS, FONTS } from "../../constants/theme";
import { MainHeader } from "../MainHeader/MainHeader";
import { categoryData } from "../Data/categoryData";
import { RestaurantList } from "../RestaurantList/RestaurantList";


export const Home = ({ navigation }) => {
  

  return (
    <SafeAreaView style={styles.container}>
     <MainHeader />
      <MainCategory />
      <RestaurantList navigation={navigation}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
