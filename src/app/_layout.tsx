import { Stack } from "expo-router";
// @ts-ignore Expo/Metro resolves this global stylesheet at runtime.
import '../styles/global.css'

export default function RootLayout() { 
    return <Stack />
}