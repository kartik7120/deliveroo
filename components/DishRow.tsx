import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../sanity";
import { useState } from "react";

import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from "../features/basketSlice";
export interface Props {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function DishRow(props: Props) {
    const [Pressed, setPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(state => selectBasketItemsWithId(state, props.id));
    const addItemToBasket = () => {
        dispatch(addToBasket({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            image: props.image
        }))
    }

    const removeItemsFromBasket = () => {
        if (!(items.length > 0)) {
            return;
        }
        dispatch(removeFromBasket({ id: props.id }))
    }

    return (
        <>
            <TouchableOpacity onPress={() => setPressed(!Pressed)}
                className={`bg-white p-4 border-gray-200 ${Pressed && "border-b-0"}`}>
                <View className="flex-row ">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{props.name}</Text>
                        <Text className="text-gray-400">{props.description}</Text>
                        <Text className="text-gray-400 mt-2">
                            <Currency quantity={props.price} currency="USD" />
                        </Text>
                    </View>
                    <View>
                        <Image style={{
                            borderWidth: 1,
                            borderColor: "#f3f3f4"
                        }} source={{
                            uri: urlFor(props.image).url()
                        }} className="h-20 w-20 bg-gray-300 p-4" />
                    </View>
                </View>
            </TouchableOpacity>
            {Pressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity disabled={items.length <= 0} onPress={() => removeItemsFromBasket()}>
                            <MinusCircleIcon size={40}
                                color={items.length > 0 ? "#00cc88" : "gray"} />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <View>
                            <TouchableOpacity onPress={() => addItemToBasket()}>
                                <PlusCircleIcon size={40} color={'#00CC88'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}

        </>
    )
}