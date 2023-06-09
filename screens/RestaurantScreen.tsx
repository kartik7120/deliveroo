import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStack } from '../App';
import { useLayoutEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
type RouteProps = RouteProp<RootStack, 'Restaurant'>;
type RestaurantNavigationProp = NativeStackNavigationProp<RootStack, 'Restaurant'>;

export default function RestaurantScreen() {
    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    } } = useRoute<RouteProps>();
    const navigation = useNavigation<RestaurantNavigationProp>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className='relative '>
                    <Image source={{
                        uri: imgUrl
                    }} className='w-full h-56 bg-gray-300 p-4' />
                    <TouchableOpacity className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full' onPress={() => {
                        navigation.goBack();
                    }}>
                        <ArrowLeftIcon size={20} color={'#00CC88'} />
                    </TouchableOpacity>
                </View>
                <View className='bg-white px-4 pt-4 '>
                    <Text className='text-3xl font-bold'>{title}</Text>
                    <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-green-500'>{rating}</Text> - {genre}
                            </Text>
                        </View>
                        <View className='flex-row items-center space-x-1'>
                            <MapPinIcon color="gray" opacity={0.4} size={22} />
                            <Text className='text-xs text-gray-500'>
                                Nearby - {address}
                            </Text>
                        </View>
                    </View>
                    <Text className='text-gray-500 mt-2 pb-4'>
                        {short_description}
                    </Text>
                    <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                        <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
                        <Text className='pt-2 flex-1 text-lg font-bold'>
                            Have a food allergy ?
                        </Text>
                        <ChevronRightIcon />
                    </TouchableOpacity>
                </View>
                <View className='pb-36'>
                    <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                        Menu
                    </Text>
                    {dishes.map((dish, index) => {
                        return (
                            <DishRow key={index} {...dish} />
                        )
                    })}
                </View>
            </ScrollView >
        </>
    )
}