import { Text, View, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import SanityClient, { urlFor } from "../sanity";

interface Props {
    title: string;
    description: string;
    featuredCategory: string;
    id: string;
}

export default function FeaturedRow(props: Props) {

    const [resteraunts, setResteraunts] = useState([] as any);
    useEffect(() => {
        SanityClient.fetch(`
            *[_type == "featured" && _id == $id]{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    type-> {
                        name
                    }
                },
            }[0]
        `, { id: props.id }).then(data => {
            if (data) {
                setResteraunts(data.restaurants);
            }
        })
    }, [props.id])

    if (!resteraunts) return (
        <View>
            <Text>Loading...</Text>
        </View>
    )

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{props.title}</Text>
                <ArrowRightIcon size={20} color="#00CC88" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{props.description}</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={{
                paddingHorizontal: 15,
            }} className="pt-4">

                {resteraunts  && resteraunts.map((resteraunt: any) => (
                    <RestrauntCard key={resteraunt._id} id={resteraunt._id} imgUrl={resteraunt.image}
                        title={resteraunt.name} rating={resteraunt.rating} genre={resteraunt.type.name}
                        address={resteraunt.address}
                        short_description={resteraunt.short_description} dishes={resteraunt.dishes}
                        long={resteraunt.long} lat={resteraunt.lat} />
                ))}

                {/* <RestrauntCard id={props.id} imgUrl="https://links.papareact.com/gn7"
                    title={'this is a title'} rating={4.5} genre="Grocery" address="1234 Main St"
                    short_description="This is a short description" dishes={["Dishes"]} long={123} lat={123} /> */}

            </ScrollView>
        </View>
    )
}