import React, { useEffect, useState } from 'react';
import { StyleSheet, View, PermissionsAndroid, Image } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';
import ImageButton from './ImageButton';
import { Button } from 'react-native';

Mapbox.setAccessToken('pk.eyJ1IjoiY3JhenlidWZmIiwiYSI6ImNsdDlwM2dnbzAwMjAya251NG1sa2JiYWsifQ.CYVOTw9TmMO9YUSzYzBYjg');


const Map = ({handleNav}) => {
    const [userLocation, setUserLocation] = useState(null)  
    const [calloutVisible, setCalloutVisible] = useState(false);
    const [coordinates, setCoordinates] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [markersCount, setMarkersCount] = useState(0);
    const [addingMemory, setAddingMemory] = useState(false);


    const handleAddMemory = (coords) => {
      console.log(coords)
      setCoordinates(coords);
      setAddingMemory(!addingMemory)
    }
   
    useEffect(() => {
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
  
          return;
        }
  
        const currentLocation = await Location.getCurrentPositionAsync({});
  
        setUserLocation(currentLocation.coords);
      })();
    }, []);

    return (
        
      <View style={styles.page}>
        <View style={styles.container}>
          {userLocation &&
          <Mapbox.MapView style={styles.map} onPress={(feature) => handleAddMemory(feature.geometry.coordinates)}>
            <Mapbox.Camera
              zoomLevel={15}
              centerCoordinate={[userLocation.longitude, userLocation.latitude]}
              animationMode="flyTo"
              animationDuration={2000}
            />
            {addingMemory ? 
              <Mapbox.PointAnnotation
                key="memoryAdder"
                id="memoryAdder"
                coordinate={coordinates}
                onSelected={handleNav}
              >
              
                  <Image source={require('../assets/addMemoryMapIcon.png')} style={styles.memoryIcon} />
              </Mapbox.PointAnnotation> :
              null
            }
            <Mapbox.UserLocation androidRenderMode='normal'  />
          </Mapbox.MapView>
          }
        </View>
      </View>
    )
}


export default Map;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '110%',
    width: '100%',
  },
  map: {
    flex: 1
  },
  memoryIcon: {
    width: 50,
    height: 50,
    marginTop: -80
  },
  view: {
    width: 50,
    height: 50
  }
});
