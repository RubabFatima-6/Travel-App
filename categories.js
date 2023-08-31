
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../themes';
import { categoriesData } from '../constants';

export default function Categories() {

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: wp(6), color: 'black', fontWeight: 'bold', marginLeft: 7,marginTop:10 }}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: wp(6), marginRight: 14.5, color: theme.text, fontWeight: 'bold' }}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="space-x-4"
                showsHorizontalScrollIndicator={false}>
                {
                    categoriesData.map((cat, index) => {
                        return (
                            <TouchableOpacity key={index} style={{ alignItems: 'center' }} >
                                <Image source={cat.image} style={{ width: wp(28), height: wp(28), marginTop: 20, borderRadius: 30, gap: 10, flexDirection: 'row', justifyContent: 'space-between', margin: 5 }} />
                                <Text style={{ marginTop:3.5,color: 'black', fontSize: 16.5, fontWeight: '500' }}>{cat.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}