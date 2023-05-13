import { View, Text, ScrollView } from "react-native";
import CategoriesCard from "./CategoriesCard";
import { useEffect, useState } from "react";
import SanityClient, { urlFor } from "../sanity";

export default function Categories() {

    const [Categories, setCategories] = useState([] as any);

    useEffect(() => {
        SanityClient.fetch(`
            *[_type == "category"]
        `).then(data => {
            if (data) {
                setCategories(data);
            }
            // console.log(`Categories: ${JSON.stringify(data)}`);
        })
    }, []);

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10
        }}>
            {Categories && Categories.map((category: any) => (
                <CategoriesCard key={category._id} imgUrl={urlFor(category.image).width(200).url()} title={category.name} />
            ))}
        </ScrollView>
    )
}