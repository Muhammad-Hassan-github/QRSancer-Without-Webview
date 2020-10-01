// In App.js in a new project

import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, StatusBar ,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Button, Text ,Icon} from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import QRScan from "./components/QRScan"
import ProductDetails from "./components/productDetails"
import backgroundImage from "./images/background1.jpg"

function HomeScreen({ navigation }) {
  return (
         <ImageBackground source={backgroundImage} style={style.image}>
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#5a55af" />
      <Image
        style={{ height: hp("20%"), width: wp("40%") }}
        resizeMode="cover"
        source={require('./images/logo.png')}
      />
      <View><Button    style={style.VerifyBtn} onPress={() => navigation.navigate('QRScan')} ><Text style={{fontSize:22}}> Verify </Text></Button></View>
    </View>
      </ImageBackground>
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
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({

  container: {
    marginTop: RFPercentage(-10),
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  VerifyBtn: {
    marginTop: RFPercentage(10),
    height:50,
    width:150,
    display:"flex",
    justifyContent:"center"


  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

})