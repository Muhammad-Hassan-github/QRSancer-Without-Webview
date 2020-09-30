import React, { useState, useEffect } from "react";
import { Linking, Text, TouchableOpacity, Alert, View, Dimensions } from "react-native"
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from 'react-native-camera';
import { useIsFocused } from "@react-navigation/native";

import { useHeaderHeight } from '@react-navigation/stack';
import { set } from "react-native-reanimated";

export default function QRScan({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const headerHeight = useHeaderHeight();

    const [flag, setFlag] = useState(false);

    const isFocused = useIsFocused();
    console.log(isFocused)
 

    let ifScanded = e => {
        navigation.navigate('ProductDetail', { data: e })
    }


    return (

        <QRCodeScanner
            containerStyle={{ backgroundColor: "#FFF", height: 100 }}
            flashMode={RNCamera.Constants.FlashMode.auto}  // .....Torch
            onRead={ifScanded}
            reactivate={true}

            permissionDialogMessage="Need Permission To Access Camera"
            reactivateTimeout={5000}
            showMarker={true}
            markerStyle={{ borderColor: "#FFF", borderRadius: 10 }}
            bottomContent={
                <TouchableOpacity>
                    <Text style={{ fontSize: 21, marginTop: 50, color: "rgb(0,122,255)" }}>Scan QRCode</Text>
                </TouchableOpacity>
            }
            cameraStyle={{ height: windowHeight - headerHeight, alignItems: "center", justifyContent: "center" }}
            bottomViewStyle={{ display: "none" }}
            topViewStyle={{ display: "none" }}
        // containerStyle={{display:"none"}}

        />
        

    )
}