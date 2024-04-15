import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import NewUserScreen from "./screens/newUser";

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="newUser" component={NewUserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router