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

export const RestaurantList = ({navigation}) => {
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [restaurants, setRestaurants] = useState(restaurantData);
    
    const onSelectCategory = (category) => {
      const restaurantList = restaurantData.filter((a) =>
        a.categories.includes(category.id)
      );
      setRestaurants(restaurantList);
      setSelectedCategory(category);
    };
  
    const getCategoryNameById = (id) => {
      const category = categories.find((a) => a.id == id);
      return category.name;
    };
  
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ marginBottom: SIZES.padding * 2 }}
          onPress={() =>
            navigation.navigate("Restaurent", {
              item,
              
            })
          }
        >
          <View style={{ marginBottom: SIZES.padding, marginTop: 30 }}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{ width: "100%", height: 200, borderRadius: SIZES.radius }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
          </View>
          <View>
            <Text style={{ ...FONTS.body2, marginBottom: 10 }}>{item.name}</Text>
          </View>
          <View
            style={{
              position: "relative",
              top: 30,
              flexDirection: "row",
              marginRight: 30,
            }}
          >
            <Image
              source={icons.star}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.primary,
                marginRight: 10,
                marginTop: 20,
              }}
            />
            <Text style={{ marginTop: 20 }}>{item.rating}</Text>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              {/* {item.categories.map((categoryId) => (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ marginTop: 20, marginLeft: 10 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                </View>
              ))} */}
              {[1, 2, 3].map((priceRating) => (
                <View style={{ marginTop: 20, marginLeft: 3 }}>
                  <Text
                    key={priceRating}
                    style={{
                      ...FONTS.body,
                      color:
                        priceRating < item.rating
                          ? COLORS.black
                          : COLORS.secondary,
                    }}
                  >
                    
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
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
  


