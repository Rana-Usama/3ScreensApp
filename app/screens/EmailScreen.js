import React, { useState } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { EvilIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import AppButton from '../components/common/AppButton';
import InputField from './../components/common/InputField';
import LoadingModal from './../components/common/LoadingModal';
import BottomBar from "../components/common/BottomBar";

//config
import Colors from '../config/Colors';

function EmailScreen(props) {

    const [indicator, showIndicator] = useState(false);
    const [bottomBar, setBottomBar] = useState(true);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Current Email Address",
            value: "",
        },
        {
            placeholder: "New Email Address",
            value: "",
        },
        {
            placeholder: "Confirm Email",
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

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API integration
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >

            <Screen statusBarColor={Colors.bright} style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
                <LoadingModal show={indicator} />

                <View style={styles.topMainContainer}>

                    {/* Top View */}
                    <View style={styles.topMainSubContainer}>

                        {/*Avatar*/}
                        <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.8}>
                            <Image style={{ width: RFPercentage(9), height: RFPercentage(9) }} source={require('../../assets/images/avatar.png')} />
                        </TouchableOpacity>

                        <View style={styles.topViewContentContainer}>

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
                <View style={styles.emptyView} />

                {/* Change password label right */}
                <TouchableOpacity activeOpacity={0.8} style={styles.changePassLabel}>
                    <Text style={{ color: Colors.lightWhite, fontSize: RFPercentage(2.5) }}>
                        E-mail Address
                    </Text>
                </TouchableOpacity>

                <ScrollView style={{ flex: 1, width: '100%' }} >

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>

                        {/* input fields */}
                        <View style={{ marginTop: RFPercentage(8), justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginTop: i === 0 ? RFPercentage(-2) : RFPercentage(2) }} >
                                    <InputField
                                        placeholder={item.placeholder}
                                        backgroundColor={Colors.inputFieldBackgroundColor}
                                        borderWidth={0.3}
                                        onTouchStart={() => setBottomBar(false)}
                                        onTouchEnd={() => setBottomBar(true)}
                                        borderColor={"#E3E5E5"}
                                        secure={item.secure}
                                        borderRadius={RFPercentage(10)}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"95%"}
                                    />
                                </View>
                            ))}
                        </View>

                        {/* Button */}
                        <View style={{ marginTop: RFPercentage(2) }}>
                            <AppButton onPress={() => handleLogin()} />
                        </View>
                    </View>
                </ScrollView>

                {/* Botom View with avatar */}
                {bottomBar ?
                    <BottomBar props={props} /> :
                    null
                }

            </Screen>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    topMainContainer: {
        width: '100%',
        height: RFPercentage(30),
        backgroundColor: Colors.bright,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topMainSubContainer: {
        marginBottom: RFPercentage(1),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%'
    },
    topViewContentContainer: {
        marginTop: RFPercentage(4),
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: RFPercentage(1.5)
    },
    emptyView: {
        width: '100%',
        height: RFPercentage(3),
        backgroundColor: Colors.inputFieldBackgroundColor
    },
    changePassLabel: {
        backgroundColor: Colors.purple,
        width: RFPercentage(23),
        height: RFPercentage(3.9),
        borderTopLeftRadius: RFPercentage(10),
        borderBottomLeftRadius: RFPercentage(10),
        alignSelf: 'flex-end',
        marginTop: RFPercentage(2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: RFPercentage(7.4),
        backgroundColor: Colors.lightPurple,
        position: 'absolute', bottom: 0
    }
})

export default EmailScreen;