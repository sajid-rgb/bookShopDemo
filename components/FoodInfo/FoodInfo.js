import React, { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import { isIphoneX } from 'react-native-iphone-x-helper'

import icons from '../../constants/icons'
import {FONTS} from '../../constants/theme'
import {COLORS} from '../../constants/theme'
import {SIZES} from '../../constants/theme'
export function FoodInfo({route}) {
    const scrollX = new Animated.Value(0);
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

  useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item)
    setCurrentLocation(currentLocation)
  })

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice()
    let item = orderList.filter(a => a.menuId == menuId)

    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1
        item[0].qty = newQty
        item[0].total = item[0].qty * price
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price
        }
        orderList.push(newItem)
      }

      setOrderItems(orderList)
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1
          item[0].qty = newQty
          item[0].total = newQty * price
        }
      }

      setOrderItems(orderList)
    }
  }

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter(a => a.menuId == menuId)

    if (orderItem.length > 0) {
      return orderItem[0].qty
    }

    return 0
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

    return itemCount
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

    return total.toFixed(2)
  }

    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }
        ], { useNativeDriver: false })}
      >
        {
          restaurant?.menu.map((item, index) => (
            <View
              key={`menu-${index}`}
              style={{ alignItems: 'center' }}
            >
              <View style={{ height: SIZES.height * 0.35 }}>
                {/* Food Image */}
                <Image
                  source={item.photo}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width,
                    height: "100%"
                  }}
                />

                {/* Quantity */}
                <View
                  style={{
                    position: 'absolute',
                    bottom: - 20,
                    width: SIZES.width,
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row'
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 50,
                      backgroundColor: COLORS.white,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopLeftRadius: 25,
                      borderBottomLeftRadius: 25
                    }}
                    onPress={() => editOrder("-", item.menuId, item.price)}
                  >
                    <Text style={{ ...FONTS.body1 }}>-</Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      width: 50,
                      backgroundColor: COLORS.white,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text style={{ ...FONTS.h2 }}>{getOrderQty(item.menuId)}</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: 50,
                      backgroundColor: COLORS.white,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopRightRadius: 25,
                      borderBottomRightRadius: 25
                    }}
                    onPress={() => editOrder("+", item.menuId, item.price)}
                  >
                    <Text style={{ ...FONTS.body1 }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Name & Description */}
              <View
                style={{
                  width: SIZES.width,
                  alignItems: 'center',
                  marginTop: 15,
                  paddingHorizontal: SIZES.padding * 2
                }}
              >
                <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{item.name} - {item.price.toFixed(2)}</Text>
                <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
              </View>

              {/* Calories */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10
                }}
              >
                {/* <Image
                  source={icons.fire}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10
                  }}
                /> */}

                {/* <Text style={{
                  ...FONTS.body3, color: COLORS.darygray
                }}>{item.calories.toFixed(2)} cal</Text> */}
              </View>
            </View>
          ))
        }
      </Animated.ScrollView>
    )
  }

  function renderDots() {

    const dotPosition = Animated.divide(scrollX, SIZES.width)

    return (
      <View style={{ height: 30 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.padding
          }}
        >
          {restaurant?.menu.map((item, index) => {

            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp"
            })

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp"
            })

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: "clamp"
            })

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor
                }}
              />
            )
          })}
        </View>
      </View>
    )
  }
