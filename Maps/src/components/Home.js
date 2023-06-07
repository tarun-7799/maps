/* import { View, Text, ImageBackground, Button, FlatList, TouchableOpacity } from "react-native";
import Map from "./Map";

const Home = (props) => {

    return (

       
            <View style={{ marginTop: 500, width: '50%', marginLeft: 100 }}>
                <TouchableOpacity style={{
                    backgroundColor: '#214580',
                    borderRadius: 300,
                    alignItems: 'center',
                    width: '100%',
                    height: 50,
                    marginTop: 100
                }}
                    onPress={() => { }}
                >
                    <Text style={{ color: 'white', margin: 7, fontSize: 24, fontWeight: 'bold' }}>Dealer</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{
                    backgroundColor: '#214580',
                    borderRadius: 300,
                    alignItems: 'center',
                    width: '100%',
                    height: 50,
                    marginTop: 40
                }}
                    onPress={() => props.navigation.navigate(Map)}
                >
                    <Text style={{ color: 'white', margin: 7, fontSize: 24, fontWeight: 'bold' }}>Admin</Text>
                </TouchableOpacity>
            </View>
     

    )
}


export default Home; */