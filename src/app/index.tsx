import { Text, TouchableOpacity, View } from "react-native";
import { router } from 'expo-router'

export default function App() { 
    return (
        <View>
            <Text className="text-purple-base">Marketplace</Text>
            <TouchableOpacity onPress={() => router.push('login')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}