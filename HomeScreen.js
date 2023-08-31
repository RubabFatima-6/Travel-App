
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import SortCategories from '../components/sortcategories';
import Destinations from '../components/destinations';

export default function HomeScreen() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fffff0' }}>
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-6">

                {/* avatar */}

                <View className="mx-5 flex-row justify-between items-center mb-10">
                    <Text style={{ fontSize: wp(8), marginLeft: 20, marginTop: 15, fontWeight: 'bold', color: 'black' }} >Let's Discover</Text>

                    <TouchableOpacity>
                        <Image source={require('../../assets/avatar.png')} style={{ height: wp(15), width: wp(15), marginTop: -45, marginLeft: 290 }} />
                    </TouchableOpacity>
                </View>

                {/* search bar */}
                <View >
                    <View style={{ flexDirection: 'row', backgroundColor: '#fffacd', padding: 16, borderRadius: 20, paddingBottom: 3, marginTop: 25, marginRight: 16.5, marginLeft: 16.5 }}>
                        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
                        <TextInput
                            placeholder='Search destination'
                            placeholderTextColor={'gray'}
                            style={{ flex: 1, marginLeft: 10, marginTop: -16, fontSize: 22 }}
                        />
                    </View>
                </View>

                {/* categories */}
                <View style={{ marginTop: 10, marginLeft: 10 }}>
                    <Categories />
                </View>

                {/* sortcategories */}
                <View style={{ marginTop: 10, marginLeft: 10 }}>
                    <SortCategories />
                </View>

                {/* destinations */}
                <View >
                   <Destinations />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}