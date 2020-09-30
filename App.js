// In App.js in a new project

import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Button, Text ,Icon} from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import QRScan from "./components/QRScan"
import ChangeStatus from "./components/changeStatus"
import ProductDetails from "./components/productDetails"

function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="red" />
      <Image
        style={{ height: hp("20%"), width: wp("40%") }}
        resizeMode="cover"
        source={require('./images/logo.png')}
      />
      <View><Button large success style={style.VerifyBtn} onPress={() => navigation.navigate('QRScan')} ><Text> Verify </Text></Button></View>
     
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'QR Scaner App', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'white'
            }
          }} />
        <Stack.Screen name="QRScan" component={QRScan}
          options={{
            title: 'Scan QRCode', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'white'
            }
          }} />
          <Stack.Screen name="ProductDetail" component={ProductDetails}
          options={{
            title: 'Scan QRCode', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'white'
            }
          }} />
          <Stack.Screen name="ChangeStatus" component={ChangeStatus}
          options={{
            title: 'Scan QRCode', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'white'
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({

  container: {
    marginTop: RFPercentage(-10),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "brown"
  },
  VerifyBtn: {
    marginTop: RFPercentage(10),


  }

})