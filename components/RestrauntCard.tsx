import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon, } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { RootStack } from '../App';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: any[];
    long: number; // longitude
    lat: number; // latitude
}

type RestaurantNavigationProp = NativeStackNavigationProp<RootStack, 'Restaurant'>;

const RestrauntCard = (props: Props) => {
    const navigation = useNavigation<RestaurantNavigationProp>();
    return (
        <TouchableOpacity className='bg-white mr-3 shadow' onPress={() => {
            navigation.navigate("Restaurant", {
                id: props.id,
                imgUrl: urlFor(props.imgUrl).url(),
                title: props.title,
                rating: props.rating,
                genre: props.genre,
                address: props.address,
                short_description: props.short_description,
                dishes: props.dishes,
                long: props.long,
                lat: props.lat,
            })
        }}>
            <Image source={{
                uri: urlFor(props.imgUrl).url()
            }} className="w-64 h-36 rounded-sm" />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{props.title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{props.rating}</Text> - {props.genre}
                    </Text>
                </View>
            </View>

            <View className='flex-row items-center space-x-1'>
                <MapPinIcon size={20} color="gray" opacity={0.4} />
                <Text className='text-xs text-gray-500'>Nearby. {props.address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RestrauntCard;