
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen() {
    const navigation=useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#6495ed' }}>
            <View>
                <ImageBackground source={require("../../assets/background.png")}
                    style={{ height: 732, width: 360 }} >
                    
                    <View>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'white',
                            alignItems: 'center',
                            marginTop: 450,
                            marginLeft: 12,
                            fontSize: wp(11.5)
                        }}>
                            Travelling made {'\n'}easy!
                        </Text>
                        <Text style={{
                            fontSize: wp(6.5),
                            color: '#f0ffff',
                            marginLeft: 'auto',
                            marginRight:'auto'
                        }}>
                            Experience the world's best adventure around the world with us
                        </Text>
                    </View>


                    <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{
                        backgroundColor: '#ff8c00',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding: 25,
                        borderRadius: 25,
                        paddingTop: 2,
                        paddingBottom: 5,
                        alignItems: 'center',
                        marginTop: 12
                    }}>

                        <Text style={{
                            fontSize: wp(7),
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Let's go!</Text>
                    </TouchableOpacity>

                </ImageBackground>

            </View>
        </View>
    )
}
