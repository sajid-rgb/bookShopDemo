import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'

import icons from '../../constants/icons'
import { SIZES, COLORS, FONTS } from '../../constants/theme'




export function MainHeader() {
    return (
        <View style={{ flexDirection: "row", alignItems:'center',justifyContent:'center', height: 50 }}>
        <View>
<Text style={{fontSize:35,color:'#b30000',fontWeight:'bold',marginTop:60}}>
 BOOK STORE

</Text>

</View>
 <View
   style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
 >
 </View>
 <TouchableOpacity
   style={{
     width: 50,
     paddingLeft: SIZES.padding * 2,
     justifyContent: "center",
     marginRight:30,
     marginTop: 50
   }}
 >
   <Image
     source={icons.basket}
     resizeMode="contain"
     style={{ width: 30, height: 30 }}
   />
 </TouchableOpacity>
</View>
    )
  }