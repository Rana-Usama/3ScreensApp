import React, { useState } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { EvilIcons } from '@expo/vector-icons';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import InputField from '../components/common/InputField';

function HomeScreen(props) {

    const [selectedItem, setItem] = useState('')

    const items = [
        { label: "Language 1", value: "Language 1" },
        { label: "Language 2", value: "Language 2" },

    ]

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            style={{ fontSize: RFPercentage(3.5), right: RFPercentage(31.6) }}
            color={"grey"}
        />
    }

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Home Address",
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };



    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

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

            {/* Empty view for grey layer */}
            <View style={{ width: '100%', height: RFPercentage(3), backgroundColor: Colors.inputFieldBackgroundColor }} />

            {/* Change password label right */}
            <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: Colors.purple, width: RFPercentage(23), height: RFPercentage(3.9), borderTopLeftRadius: RFPercentage(10), borderBottomLeftRadius: RFPercentage(10), alignSelf: 'flex-end', marginTop: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: Colors.lightWhite, fontSize: RFPercentage(2.5) }}>
                    Private Account
                </Text>
            </TouchableOpacity>

            <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >

                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>
                    {/* Second avatar */}
                    <View style={{ width: "88%", alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>

                        <TouchableOpacity activeOpacity={0.8}>
                            <Image style={{ width: RFPercentage(9), height: RFPercentage(9) }} source={require('../../assets/images/avatar.png')} />
                        </TouchableOpacity>

                        <Text style={{ color: Colors.lightBrown, marginLeft: RFPercentage(3), marginTop: RFPercentage(5), fontSize: RFPercentage(2.4) }}>
                            @ Set Username
                        </Text>
                    </View>

                    {/* Date of birth */}
                    <View style={{ marginTop: RFPercentage(5), width: "88%", alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>

                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2.4) }}>
                            Date of birth
                        </Text>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(5), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.2), width: RFPercentage(13), height: RFPercentage(6), borderRadius: RFPercentage(10) }}>
                            <Text style={{ color: Colors.grey, fontSize: RFPercentage(2) }}>23/10/1987</Text>
                        </View>
                    </View>

                    {/* Input field */}
                    <View style={{ marginTop: RFPercentage(2.3), justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i === 1 ? RFPercentage(3) : RFPercentage(0) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    backgroundColor={Colors.inputFieldBackgroundColor}
                                    borderWidth={0.3}
                                    leftIconName={"location-on"}
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

                    <View style={{ marginTop: RFPercentage(1.5), width: "88%", alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2.4) }}>
                            Language
                        </Text>
                    </View>

                    {/* Picker */}
                    <View style={{ marginTop: RFPercentage(2.8), width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <ReactNativeCrossPicker
                            modalTextStyle={{ color: "rgb(0, 74, 173)" }}
                            mainComponentStyle={{ justifyContent: 'center', alignItems: 'center', width: "80%", borderWidth: RFPercentage(0.2), borderColor: Colors.grey, backgroundColor: Colors.white, height: RFPercentage(7.5), borderRadius: RFPercentage(25) }}
                            modalComponentStyle={{ borderRadius: RFPercentage(3), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.1) }}
                            iconComponent={iconComponent}
                            placeholderStyle={{ marginLeft: RFPercentage(32), color: Colors.darkGrey, textDecorationLine: 'underline', fontSize: RFPercentage(2.4) }}
                            modalTextStyle={{ color: "#12424a", fontSize: RFPercentage(2.6), fontWeight: 'bold' }}
                            items={items}
                            setItem={setItem} selectedItem={selectedItem}
                            placeholder="English"
                            modalMarginTop={"45%"}
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(1.5), width: "88%", alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2.4) }}>
                            Exercise
                        </Text>
                    </View>

                    {/* Calendar */}
                    <View style={{ marginTop: RFPercentage(2.8), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.2), width: "80%", height: RFPercentage(7.5), borderRadius: RFPercentage(10) }}>

                        <FontAwesome name="calendar" style={{ fontSize: RFPercentage(3.5), position: 'absolute', left: RFPercentage(3) }} color="black" />

                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6) }}>
                            iOS Calendar
                        </Text>

                        <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', right: RFPercentage(3) }}>
                            <Entypo name="plus" style={{ fontSize: RFPercentage(2.8) }} color={Colors.darkGrey} />
                        </TouchableOpacity>
                    </View>

                    {/* Change pass and email hyperlinks */}
                    <View style={{ marginBottom: RFPercentage(16), marginTop: RFPercentage(2), width: '100%', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' }}>

                        <TouchableOpacity onPress={() => props.navigation.navigate("PasswordScreen")} activeOpacity={0.5}>
                            <Text style={{ textDecorationLine: 'underline', fontSize: RFPercentage(2.5), color: Colors.darkGrey }}>
                                Change Password
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate("EmailScreen")} activeOpacity={0.5}>
                            <Text style={{ textDecorationLine: 'underline', fontSize: RFPercentage(2.5), color: Colors.darkGrey }}>
                                Change E-mail
                            </Text>
                        </TouchableOpacity>
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

export default HomeScreen;