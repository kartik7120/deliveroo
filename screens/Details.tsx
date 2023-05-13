import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details({ navigation: nav, route }: any) {
    const [count, setCount] = useState(0);
    console.log("Route params = ", route.params);

    useEffect(() => {
        nav.setOptions({
            headerRight: () => (
                <Button title="Add" onPress={() => setCount(count => count + 1)} />
            )
        })
    }, [nav]);

    return (
        <SafeAreaView>
            <View>
                <Text>This is the Details screen</Text>
                <Button title="Go to details... again" onPress={() => nav.push("Details")} />
                <Button title="Go back" onPress={() => nav.goBack()} />
                <Button title="Go back to first screen in Stack" onPress={() => nav.popToTop()} />
                <Button title='Go to Home' onPress={() => nav.navigate('Home', {
                    name: "Home",
                    params: {
                        post: "This is a post text"
                    },
                    merge: true
                })} />
                <Text>Count : {count}</Text>
            </View>
        </SafeAreaView>
    )
}