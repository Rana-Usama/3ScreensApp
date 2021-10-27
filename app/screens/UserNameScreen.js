import React, { useState } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { EvilIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import AppButton from '../components/common/AppButton';
import InputField from './../components/common/InputField';
import LoadingModal from './../components/common/LoadingModal';

//config
import Colors from '../config/Colors';

function UserNameScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Username",
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API integration
        } catch (error) {
            alert("Login Error");
        }

        showIndicator(false);
    };

    const detailData = [
        {
            text: '- Must be between six and 50 character long.'
        },
        {
            text: '- Can contain any letter from a to z and any number from 0 to 9'
        },
        {
            text: '- Can contain spaces and some special characters including "-", "/", "_" (hyphen, dash, or underscore)'
        },
        {
            text: '- Can contain non english characters (such as e)'
        },
        {
            text: '- It is not case sensitive'
        },
    ]

    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />

            <View style={{ width: '100%', height: RFPercentage(30), backgroundColor: Colors.pink, justifyContent: 'center', alignItems: 'center' }}>

                {/* Top View */}
                <View style={{ marginBottom: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '80%' }}>
                    {/*Avatar*/}
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={{ width: RFPercentage(9), height: RFPercentage(9) }} source={require('../../assets/images/avatar.png')} />
                    </TouchableOpacity>

                    <View style={{ marginTop: RFPercentage(4), justifyContent: 'flex-start', alignItems: 'center', marginLeft: RFPercentage(1.5) }}>

                        <Text style={{ color: Colors.white, fontSize: RFPercentage(3), fontWeight: Platform.OS === 'android' ? 'bold' : '600' }}>
                            Firstname last name
                        </Text>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start', marginTop: RFPercentage(0.6) }}>

                            {/* Location icon */}
                            <EvilIcons name="location" style={{ fontSize: RFPercentage(2.2) }} color={Colors.lightWhite} />
                            <Text style={{ color: Colors.lightWhite, fontSize: RFPercentage(2.2), marginLeft: RFPercentage(2) }}>
                                City
                            </Text>

                            <View style={{ position: 'absolute', right: RFPercentage(-5.5), alignItems: 'center' }}>

                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5), fontWeight: 'bold' }}>
                                    2
                                </Text>
                                <Text style={{ marginTop: RFPercentage(0.3), fontSize: RFPercentage(2.2), color: Colors.lightWhite }}>
                                    Exercise
                                </Text>
                            </View>
                        </View>

                        <Text style={{ marginLeft: RFPercentage(0.4), marginTop: RFPercentage(1.2), alignSelf: 'flex-start', fontSize: RFPercentage(2.7), fontWeight: Platform.OS === 'android' ? 'bold' : '600', textDecorationLine: 'underline', color: Colors.white }}>
                            Available
                        </Text>
                    </View>
                </View>
            </View>

            {/* Change password label right */}
            <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: Colors.purple, width: RFPercentage(23), height: RFPercentage(3.9), borderTopLeftRadius: RFPercentage(10), borderBottomLeftRadius: RFPercentage(10), alignSelf: 'flex-end', marginTop: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: Colors.lightWhite, fontSize: RFPercentage(2.5) }}>
                    Username
                </Text>
            </TouchableOpacity>

            <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >

                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>
                    {/* input fields */}
                    <View style={{ marginTop: RFPercentage(6), justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i === 1 ? RFPercentage(3) : RFPercentage(0) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    backgroundColor={Colors.inputFieldBackgroundColor}
                                    borderWidth={0.3}
                                    borderColor={"#E3E5E5"}
                                    borderRadius={RFPercentage(10)}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"95%"}
                                />
                            </View>
                        ))}
                    </View>

                    {/* Detailed Text */}
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <Text style={{ color: Colors.grey, marginTop: RFPercentage(2), fontSize: RFPercentage(2.2) }}>
                            Your username
                        </Text>
                        {detailData.map((item, i) => (

                            <Text key={i} style={{ color: Colors.grey, marginTop: i === 0 ? RFPercentage(2) : RFPercentage(0.4), fontSize: RFPercentage(2.2) }}>
                                {item.text}
                            </Text>
                        ))}

                    </View>

                    {/* Button */}
                    <View style={{ marginTop: RFPercentage(2), marginBottom: RFPercentage(20) }}>
                        <AppButton onPress={() => handleLogin()} />
                    </View>

                </View>
            </ScrollView>

            {/* Botom View with avatar */}
            <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: '100%', height: RFPercentage(7.4), backgroundColor: Colors.lightPurple, position: 'absolute', bottom: 0 }} >
                <TouchableOpacity activeOpacity={0.8}>
                    <Image style={{ marginRight: RFPercentage(4), width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/avatar.png')} />
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

export default UserNameScreen;