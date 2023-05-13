import { View, Text, Image, TouchableOpacity } from "react-native";

interface Props {
    imgUrl: string;
    title: string;
}

export default function CategoriesCard(props: Props) {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image source={{
                uri: props.imgUrl
            }} className="w-20 h-20" />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{props.title}</Text>
        </TouchableOpacity>
    )
}