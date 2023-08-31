
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { destinationData } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Destinations() {
    const navigation = useNavigation();
    return (
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {
                destinationData.map((item, index) => {
                    return (
                        <DestinationCard navigation={navigation} item={item} key={index} />
                    )
                })
            }
        </View>
    )
}

const DestinationCard = ({ item, navigation }) => {
    const [isFavourite, toggleFavourite] = useState(false);
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Destination', { ...item })} style={{ width: wp(44), height: wp(66), position: 'relative', marginBottom: 5, padding: 5, margin: 10.5 }}>

            <Image source={item.image} style={{ width: wp(45), height: wp(66), position: 'absolute', marginTop: 10, borderRadius: 27 }} />

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{ width: wp(44), height: wp(15), marginTop: 187, marginLeft: -2.5, borderBottomLeftRadius: 22.5, borderBottomRightRadius: 22.5 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
            </LinearGradient>

            <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={{ position: 'absolute', top: 20, right: 8, padding: 4, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: 16, borderColor: 'white', alignItems: 'center', borderWidth: 1 }}>
                <HeartIcon size={wp(5.5)} color={isFavourite ? "red" : "white"} />
            </TouchableOpacity>

            <Text style={{ color: 'gold', fontWeight: 'bold', fontSize: 17, marginTop: -126.5 }}>{item.title}</Text>
            <Text style={{ fontSize: 15, color: 'white' }}>{item.description}</Text>
        </TouchableOpacity>

    )
}