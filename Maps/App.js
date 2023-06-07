import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from './src/components/Map';



const Stack = createNativeStackNavigator();

function App() {
    return (

        <NavigationContainer independent={true} >


            <Stack.Navigator screenOptions={{ headerShown: false }}>
              
                <Stack.Screen name="Map" component={Map} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default App;