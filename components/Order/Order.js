import React, { useEffect, useState } from "react";
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



 export function Order({route}) {
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
    
    const scrollX = new Animated.Value(0);
    const [restaurant, setRestaurant] = useState(null);
    
    const [orderItems, setOrderItems] = useState([]);
    
    useEffect(() => {
      let { item, currentLocation } = route.params;
    
      setRestaurant(item)
    
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
      <View>
        {
          renderDots()
        }
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomColor: COLORS.lightGray2,
              borderBottomWidth: 1
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{getBasketItemCount()} items in Cart</Text>
            <Text style={{ ...FONTS.h3 }}>${sumOrder()}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={icons.pin}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>Location</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Image
                source={icons.master_card}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
            </View>
          </View>

          {/* Order Button */}
          <View
            style={{
              padding: SIZES.padding * 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.9,
                padding: SIZES.padding,
                backgroundColor: '#b30000',
                alignItems: 'center',
                borderRadius: SIZES.radius
              }}
              onPress={() => navigation.navigate("OrderDelivery", {
                restaurant: restaurant,
                currentLocation: currentLocation
              })}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }} >Order</Text>
            </TouchableOpacity>
          </View>
        </View>

        {isIphoneX() &&
          <View
            style={{
              position: 'absolute',
              bottom: -34,
              left: 0,
              right: 0,
              height: 34,
              backgroundColor: COLORS.white
            }}
          >
          </View>
        }
      </View>
    )
  }