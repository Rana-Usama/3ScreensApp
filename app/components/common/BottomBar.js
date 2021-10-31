import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../config/Colors';

function BottomBar({ props }) {
    return (
        <View style={styles.bottomView} >
            <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.8}>
                <Image style={{ marginRight: RFPercentage(4), width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../../assets/images/avatar.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomView: {
        justifyContent: 'center', alignItems: 'flex-end',
        width: '100%',
        height: RFPercentage(7.4),
        backgroundColor: Colors.lightPurple,
        position: 'absolute',
        bottom: 0
    }
})

export default BottomBar;