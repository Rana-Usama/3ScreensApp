import React, { useState } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { EvilIcons } from '@expo/vector-icons';
import BottomBar from "../components/common/BottomBar";

//components
import Screen from './../components/Screen';
import AppButton from '../components/common/AppButton';
import InputField from './../components/common/InputField';
import LoadingModal from './../components/common/LoadingModal';

//config
import Colors from '../config/Colors';

function PasswordScreen(props) {

    const [indicator, showIndicator] = useState(false);
    const [bottomBar, setBottomBar] = useState(true);


    const [inputField, SetInputField] = useState([
        {
            placeholder: "Old Password",
            value: "",
        },
        {
            placeholder: "New Password",
            value: "",
            secure: true
        },
        {
            placeholder: "Confirm Password",
            value: "",
            secure: true
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

        //password must contain 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!tempfeilds[1].value.match(passw)) {
            alert("Week password try another one!");
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

    return (

        <Screen statusBarColor={Colors.pink} style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
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
                    Change Password
                </Text>
            </TouchableOpacity>

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

            {/* Botom View with avatar */}
            {bottomBar ?
                <BottomBar props={props} /> :
                null
            }

        </Screen>
    );
}

const styles = StyleSheet.create({
    topMainContainer: {
        width: '100%',
        height: RFPercentage(30),
        backgroundColor: Colors.pink,
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
})

export default PasswordScreen;