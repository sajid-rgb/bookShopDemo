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

import icons from '../../constants/icons'
import {FONTS} from '../../constants/theme'
import {COLORS} from '../../constants/theme'
import {SIZES} from '../../constants/theme'



export function RestaurantHeader({route}) {
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
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center'
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>

        {/* Restaurant Name Section */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center'
          }}
        >
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }


