import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import icons from "../../constants/icons";
import images from "../../constants/images";
import { SIZES, COLORS, FONTS } from "../../constants/theme";
import { MainHeader } from "../MainHeader/MainHeader";
import { categoryData } from "../Data/categoryData";
import { restaurantData } from "../Data/restaurantData";
export function MainCategory() {
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [restaurants, setRestaurants] = useState(restaurantData);
    const [changes,seChanged] =useState(false)

    const getCategoryNameById = (id) => {
        const category = categories.find((a) => a.id == id);
        return category.name;
      };
    const renderItem = ({ item }) => {
        
       
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            padding: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id === item.id ? '#b30000' : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginLeft:10,
            ...styles.shadow,
          }}
          onPress={() => setSelectedCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
            />
          </View>
          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{ padding: SIZES.padding * 2 }}>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

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
  
