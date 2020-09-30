import React, { useState } from "react";
import { Linking, TouchableOpacity, Alert, View, Dimensions, StyleSheet } from "react-native"
import { useHeaderHeight } from '@react-navigation/stack';
import { Button, Text } from "native-base";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function ChangeStatus({ navigation, route }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const headerHeight = useHeaderHeight();


    let openURL = e => {

        Linking.openURL(e).catch(err =>
            Alert.alert("Invalid QRCode", e.data))
    }


    return (

        <View style={style.container}>
            <View style={style.btnContainer}><View><Button large success style={style.Btn} onPress={() => openURL(route.params.url)}  ><Text>Status Changed</Text></Button></View></View>
        </View>

    )
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


});