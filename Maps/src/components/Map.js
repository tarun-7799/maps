import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const locations = [
    {
        id: 1,
        name: 'Dealer 1',
        contactNumber: '123-456-7890',
        address: '123 Main St',
        latitude: 37.78825,
        longitude: -122.4324,
    },
    {
        id: 2,
        name: 'Dealer 2',
        contactNumber: '234-567-8901',
        address: '456 Elm St',
        latitude: 37.7749,
        longitude: -122.4194,
    },/* 
    {
        id: 3,
        name: 'Dealer 3',
        contactNumber: '234-567-8901',
        address: '456 Elm St',
        latitude: 37.7749,
        longitude: -122.4194,
    },
    {
        id: 4,
        name: 'Dealer 4',
        contactNumber: '234-567-8901',
        address: '456 Elm St',
        latitude: 37.7749,
        longitude: -122.4194,
    },
    {
        id: 5,
        name: 'Dealer 5',
        contactNumber: '234-567-8901',
        address: '456 Elm St',
        latitude: 37.7749,
        longitude: -122.4194,
    },
    {
        id: 6,
        name: 'Dealer 6',
        contactNumber: '234-567-8901',
        address: '456 Elm St',
        latitude: 37.7749,
        longitude: -122.4194,
    },
    {
        id: 7,
        name: 'Dealer 7',
        contactNumber: '234-567-8901',
        address: '456 Elm St',
        latitude: 37.7749,
        longitude: -122.4194,
    },
    {
        id: 8,
        name: 'Dealer 8',
        contactNumber: '234-567-8901',
        address: '456 Elm St',
        latitude: 37.7749,
        longitude: -122.4194,
    },
    {
        id: 9,
        name: 'Dealer 9',
        contactNumber: '234-567-8901',
        address: '456 Elm St',
        latitude: 37.7749,
        longitude: -122.4194,
    }, */
    {
        id: 3,
        name: 'Dealer 3',
        contactNumber: '987-654-3210',
        address: '789 Oak St',
        latitude: 37.7865,
        longitude: -122.4321,
    },
];

const App = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleMarkerPress = (location) => {
        setSelectedLocation(location);
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
         
          zoomEnabled={ true}
          zoomControlEnabled={ true}
            >
                {locations.map((location) => (
                    <Marker
                        key={location.id}
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        onPress={() => handleMarkerPress(location)}
                    />
                ))}
            </MapView>
            {selectedLocation && (
                <View style={styles.locationDetails}>
                    <Text style={styles.locationName}>{selectedLocation.name}</Text>
                    <Text>Contact: {selectedLocation.contactNumber}</Text>
                    <Text>Address: {selectedLocation.address}</Text>
                    <TouchableOpacity onPress={() => setSelectedLocation(null)}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    locationDetails: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    locationName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    closeButton: {
        color: 'blue',
        marginTop: 8,
    },
});

export default App;
