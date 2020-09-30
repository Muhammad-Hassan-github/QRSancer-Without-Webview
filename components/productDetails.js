// import React, { useState } from "react";
// import { Linking, TouchableOpacity, Alert, View  ,Dimensions,StyleSheet } from "react-native"
// import { useHeaderHeight } from '@react-navigation/stack';
// import { Button, Text } from "native-base";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// export default function ProductDetails({ navigation ,route }) {
//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;
//     const headerHeight = useHeaderHeight();

//     let openURL = e => {

//         Linking.openURL(e).catch(err =>
//             Alert.alert("Invalid QRCode", e))
//     } 

//     return (


//         <View style={style.container}>
//         <View style={style.field}><Text style={style.text} > Product Name</Text><Text style={style.text}> {route.params.data.type} </Text></View>
//         <View style={style.field}><Text style={style.text} > Product ID</Text><Text style={style.text}>{route.params.data.bounds.width} </Text></View>
//     <View style={style.field}><Text style={style.text} > Product Price</Text><Text style={style.text}> {route.params.data.bounds.height}</Text></View>
//         <View style={style.field}><Text style={style.text} > Product Amount</Text><Text style={style.text}> {route.params.data.target}</Text></View>
//         <View style={style.btnContainer}><View><Button large success style={style.Btn} onPress={() => openURL(route.params.data.data)} ><Text> Change Status </Text></Button></View></View>
//         </View>

//     )
// }



import React, { Component } from "react";
import { Container, Header, Content, Text, Button, Toast, Root } from "native-base";
import { Linking, TouchableOpacity, Alert, View, Dimensions, StyleSheet } from "react-native"
import { useHeaderHeight } from '@react-navigation/stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }
    render() {
        console.log(this.props.route.params)
        let openURL = e => {

            Toast.show({
                text: "Status Changed!",
                buttonText: "Okay",
                type: "success"
            })

            Linking.openURL(e).catch(err =>
                Alert.alert("Invalid QRCode", e))
        }
        return (
            <Root>
              

                    <View style={style.container}>
                        <View style={style.field}><Text style={style.text} > Product Name</Text><Text style={style.text}> {this.props.route.params.data.type} </Text></View>
                        <View style={style.field}><Text style={style.text} > Product ID</Text><Text style={style.text}>{this.props.route.params.data.bounds.width} </Text></View>
                        <View style={style.field}><Text style={style.text} > Product Price</Text><Text style={style.text}> {this.props.route.params.data.bounds.height}</Text></View>
                        <View style={style.field}><Text style={style.text} > Product Amount</Text><Text style={style.text}> {this.props.route.params.data.target}</Text></View>
                        <View style={style.btnContainer}><View><Button  success style={style.Btn} onPress={() => openURL(this.props.route.params.data.data)} ><Text> Change Status </Text></Button></View></View>
                    </View>
                 

                    
                        


                

            </Root>);
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
        backgroundColor: '#efefef',
        alignContent: "center",
        justifyContent: "center"

    },
    btnContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 24,
        color: '#000'
    },
    field: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    Btn: {
        marginTop: RFPercentage(10),


    }


});