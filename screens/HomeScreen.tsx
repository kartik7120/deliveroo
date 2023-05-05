/// <reference types="nativewind/types" />
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, Button } from "react-native";
import { useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon
} from "react-native-heroicons/outline";

export default function HomeScreen({ navigation: nav }: any) {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-2">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{
                    uri: "https://links.papareact.com/wru"
                }} className="w-7 h-7 bg-gray-300 rounded-full" />
                <View className="flex-1">
                    <Text className="font-bold text-gray-300 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CC88" />
                    </Text>
                </View>
                <StatusBar style="auto" />
                <UserIcon size={20} color="gray" />
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon size={30} color="#00CC88" />
                    <TextInput placeholder="Search" className="flex-1 bg-transparent outline-none" />
                </View>
                <AdjustmentsHorizontalIcon size={30} color="#00CC88" />
            </View>
            <Button title="Details" onPress={() => nav.navigate('Details')} />
        </SafeAreaView>
    );
}