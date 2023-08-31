
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon, ClockIcon, SunIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../themes';

export default function DestinationScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            {/* destination image */}
            <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />

            <StatusBar style={'light'} />

            {/* back button */}
            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100, position: 'absolute' }} >

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 4, marginTop: 13, borderRadius: 22, marginBottom: 12, marginLeft: 19, backgroundColor: '#afeeee', alignItems: 'center', paddingRight: 7 }}>
                    <ChevronLeftIcon size={wp(6)} strokeWidth={4} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={{ marginRight: -240, padding: 4.5, marginTop: 13, borderRadius: 17, marginBottom: 12, backgroundColor: '#afeeee', alignItems: 'center' }}>
                    <HeartIcon size={wp(6)} strokeWidth={4} color={isFavourite ? "red" : "white"} />
                </TouchableOpacity>

            </SafeAreaView>

            {/* title & description & booking button*/}
            <View style={{ flex: 1, padding: 5, justifyContent: 'space-between', backgroundColor: 'white', paddingTop: 8, borderTopRightRadius: 42, borderTopLeftRadius: 46, marginTop: -24 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginRight: 10 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', fontSize: wp(7), marginTop: 18, marginLeft: 12 }}>
                            {item?.title}
                        </Text >
                        <Text style={{ flex: 1, color: theme.text, fontWeight: '700', fontSize: wp(7), marginTop: 18, marginRight: -180 }}>
                            ${item?.price}</Text>
                    </View>
                    <Text style={{ fontSize: wp(4.6), color: '#8b008b', marginTop: 10, marginLeft: 11, marginRight: 4, fontWeight: '500' }}>{item?.longdescription}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 1 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}></View>
                        <ClockIcon size={wp(7)} color="skyblue" style={{ marginRight: 302, marginTop: 15 }} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, color: 'black', marginTop: -28, fontWeight: 'bold', marginLeft: 45 }}>{item.duration}</Text>
                        <Text style={{ fontSize: 17, color: 'black', marginTop: 6.5, marginLeft: 45 }}>Duration</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <MapPinIcon size={wp(7)} color="red" style={{ marginTop: -50, marginLeft: 130 }} />
                        <Text style={{ fontSize: 18, color: 'black', marginTop: -52, fontWeight: 'bold', marginLeft: 7 }}>{item.distance}</Text>
                        <Text style={{ fontSize: 17, color: 'black', marginTop: -23, marginLeft: -62 }}>Distance</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <SunIcon size={wp(7)} color="orange" style={{ marginTop: -50, marginLeft: 250 }} />
                        <Text style={{ fontSize: 18, color: 'black', marginTop: -52, fontWeight: 'bold', marginLeft: 6 }}>{item.weather}</Text>
                        <Text style={{ fontSize: 17, color: 'black', marginTop: -23, marginLeft: -46 }}>Sunny</Text>
                    </View>

                </ScrollView >

                <TouchableOpacity style={{ marginBottom: 5, marginLeft:95, justifyContent: 'center', alignItems: 'center',backgroundColor:theme.bg(0.6),borderRadius:25,height:wp(15),width:wp(50) }}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:wp(6),textAlign:'center',marginLeft:10}}>Book now</Text>
                </TouchableOpacity>

            </View >

        </View >
    )
} 