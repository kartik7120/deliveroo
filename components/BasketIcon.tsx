import { View, Text } from 'react-native';
import React from 'react';
import Currency from "react-currency-formatter";
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function BasketIcon() {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);
    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity className='bg-[#00CC88] mx-5 p-4 flex-row items-center space-x-1 rounded-lg'>
                <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
                <Text className='flex-1 text-white text-lg text-center font-extrabold'>View Basket</Text>
                <Text className='text-lg text-white font-extrabold'>
                    <Currency quantity={basketTotal} currency="USD" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}