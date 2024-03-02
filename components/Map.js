import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';


Mapbox.setAccessToken('pk.eyJ1IjoiY3JhenlidWZmIiwiYSI6ImNsdDlwM2dnbzAwMjAya251NG1sa2JiYWsifQ.CYVOTw9TmMO9YUSzYzBYjg');


const Map = () => {
    return (
        
      <View style={styles.page}>
        <View style={styles.container}>
          <Mapbox.MapView style={styles.map} />
        </View>
      </View>
    );
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
  }
});
