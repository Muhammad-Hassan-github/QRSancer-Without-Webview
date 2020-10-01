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
import { Container, Header, Content, Text, Button, Toast, Root, } from "native-base";
import { Linking, TouchableOpacity, Alert, View, Dimensions, StyleSheet, ImageBackground } from "react-native"
import { useHeaderHeight } from '@react-navigation/stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import InAppBrowser from 'react-native-inappbrowser-reborn'
import backgroundImage from "../images/background1.jpg"


export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }
    render() {
        // console.log(this.props.route.params)
        let openURL = async (e) => {

            Toast.show({
                text: "Status Changed!",
                buttonText: "Okay",
                type: "primary"
            })

            // Linking.openURL(e).catch(err =>
            //     Alert.alert("Invalid QRCode", e))

            try {
                const url = e
                if (await InAppBrowser.isAvailable()) {
                    const result = await InAppBrowser.open(url, {
                        // iOS Properties
                        dismissButtonStyle: 'cancel',
                        preferredBarTintColor: 'white',
                        preferredControlTintColor: 'brown',
                        readerMode: false,
                        animated: true,
                        modalPresentationStyle: 'overFullScreen',
                        modalTransitionStyle: 'partialCurl',
                        modalEnabled: true,
                        enableBarCollapsing: false,
                        // Android Properties

                        showTitle: false,
                        toolbarColor: '#5a55af',
                        secondaryToolbarColor: 'green',
                        enableUrlBarHiding: true,
                        enableDefaultShare: true,
                        forceCloseOnRedirection: false,
                        // Specify full animation resource identifier(package:anim/name)
                        // or only resource name(in case of animation bundled with app).
                        animations: {
                            startEnter: 'slide_in_right',
                            startExit: 'slide_out_left',
                            endEnter: 'slide_in_left',
                            endExit: 'slide_out_right'
                        },
                        headers: {
                            'my-custom-header': 'my custom header value'
                        }
                    })
                    // Alert.alert(JSON.stringify(result))
                }
                else Linking.openURL(url)
            } catch (error) {
                Alert.alert(error.message)
            }

        }
        return (
            <Root>
                <ImageBackground source={backgroundImage} style={style.image}>
                    <View style={style.container}>
                        <View><Text style={{ fontSize: 20, fontSize: RFPercentage(5), color: '#000', fontWeight: "bold" , color: "white" ,marginBottom: RFPercentage(5), }}>Ttile Here</Text></View>
                        <View style={style.box}>
                            <View style={style.field}><Text style={style.text} > Product Name </Text><Text style={style.text}> {this.props.route.params.data.type} </Text></View>
                            <View style={style.field}><Text style={style.text} > Product ID </Text><Text style={style.text}> {this.props.route.params.data.bounds.width} </Text></View>
                            <View style={style.field}><Text style={style.text} > Product Price </Text><Text style={style.text}> {this.props.route.params.data.bounds.height} </Text></View>
                            <View style={style.field}><Text style={style.text} > Maghrib</Text><Text style={style.text}> {this.props.route.params.data.target} </Text></View>
                            <View style={style.field}><Text style={style.text} > Product Amount </Text><Text style={style.text}> {this.props.route.params.data.target} </Text></View>
                        </View>
                        <View><Button style={style.VerifyBtn} onPress={() => openURL(this.props.route.params.data.data)} ><Text style={{ fontSize: 22 }}> Change  Status  </Text></Button></View>

                    </View>

                </ImageBackground>

            </Root>);
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"

    },
    btnContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',

    }, VerifyBtn: {
        marginTop: RFPercentage(7),
        height: 50,
        width: 300,
        display: "flex",
        justifyContent: "center"


    },


    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    box: {
        margin: RFPercentage(1),
        borderWidth: 3,
        borderColor: "white",
        padding: RFPercentage(0.5),
        height: hp("37%"),
        width: wp("85%"),
        borderRadius: 10,
        backgroundColor: "transparent",

    },
    text: {
        fontSize: RFPercentage(3.5),
        color: '#000',
        color: "white"
    },
    field: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomWidth: 1,
        paddingBottom: RFPercentage(1.5),
        paddingTop: RFPercentage(1),

        borderColor: "white"
    },

});