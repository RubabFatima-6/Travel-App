
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sortCategoryData } from '../constants';
import { theme } from '../themes';

export default function SortCategories() {
    const [activeSort, setActiveSort] = useState('Popular');
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    
            {
                sortCategoryData.map((sort, index) => {
                    let isActive = sort == activeSort;
                    let activeButtonClass = isActive ? 'backgroundColor:white' : '';
                    return (
                        <TouchableOpacity  onPress={() => setActiveSort(sort)} key={index} className={`${activeButtonClass}`}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#fffacd', padding: 18, borderRadius: 20, paddingBottom: 11, paddingTop: 7, marginTop: 25, margin: 15, marginLeft: -10 }}>
                                <Text style={{ fontSize: wp(4), color: 'black', fontWeight: '500', textAlign: 'center',color: isActive? theme.text:'rgba(0,0,0,0.6)' }}>{sort}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}