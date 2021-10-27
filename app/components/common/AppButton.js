import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function AppButton({ onPress }) {
    return (
        <View style={{ width: RFPercentage(10), height: RFPercentage(10), borderRadius: RFPercentage(25), backgroundColor: Colors.white, borderColor: Colors.purple, borderWidth: RFPercentage(0.3), justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{ width: RFPercentage(8.9), height: RFPercentage(8.9), borderRadius: RFPercentage(25), backgroundColor: Colors.purple, borderColor: Colors.purple, borderWidth: RFPercentage(0.3), justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5), fontWeight: Platform.OS === 'android' ? 'bold' : '600' }}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default AppButton;