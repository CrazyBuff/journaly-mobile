import React from 'react';

import {Image, Pressable, Button, StatusBar, SafeAreaView, FlatList, Text, StyleSheet, View, useWindowDimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1 }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1 }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

//memories
const MEMORIES = [
  {
    id: '1',
    title: 'Ginza Walk   ',
    address: '6-chome '
  },
  {
    id: '2',
    title: 'Shibuya Sky ',
    address: '2-chome'
  },
  {
    id: '3',
    title: 'Tokyo Tower ',
    address: '4-chome'
  },
];


function Item({title,address})  {
  let state = {isVisible: true};
  
  let redMarker = require("../assets/redMarker.png");
  //let redMarker = require("../assets/redMarker.png")

  return (
    <View style={styles.item}>
      <View>
        
        <View style={styles.box}>
          
          <Image source={redMarker} style = {styles.redMarker}/>
          <View >
            <Text style={styles.title}>{title}</Text>
            <Text style = {styles.address}>{address}</Text>
          </View>
          <View style = {styles.buttonbox}>
            <View style = {styles.viewMapButton}>
              <Pressable >
                <Text style ={{color: 'white'}}> View on map</Text>
              </Pressable> 
            </View>
          </View>
        
        </View>
        
      </View>
      
      
    </View>
  );
}

const renderItem = ({item}) =>  <Item title={item.title} address= {item.address}/>

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Memories'},
    { key: 'second', title: 'Settings' },
  ]);

  const renderTabBar = props => {
    return (
      <View>
        <TabBar
          {...props}
          indicatorStyle={styles.indicatorStyle}
          style={styles.tabBar}
        />
        
        <SafeAreaView style={styles.container}>
          <FlatList
            data={MEMORIES}
            renderItem={renderItem} 
            style={styles.container}
            keyExtractor={item => item.id}
            
          /> 
        </SafeAreaView>

      </View>
    );
  };



  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#51C3C4', 
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
    },
    indicatorStyle:{
        backgroundColor: 'gray',
        height: 2.5,
        bottom: -1,   
    },
    item: {
      backgroundColor: "#eaeaea",
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      flexDirection: "column",
      borderRadius: 20
    },
    title: {
      fontSize: 16,
      marginTop: "auto",
      marginBottom: "auto",
    },
    address: {
      fontSize: 15,
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: 10,
      width: '100%'
    },
    viewMapButton: {
      backgroundColor: "#805DD7",
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 20,
      marginRight: 0,
    },
    circle: {
      height: 40,
      width: 40,
      backgroundColor: "#CCCCCC",
      borderRadius: 30,
      marginTop: "auto",
      marginBottom: "auto",
    },
    redMarker:{
      height: 35,
      resizeMode: "contain",

    },
    box: {
      justifyContent: 'flex-start',
      alignItems: 'inline',
      flexDirection: 'row',
      marginLeft: "auto",
      marginRight: "2%"
    },
    box1: {
      alignItems: "flex-start"
    },
    buttonbox: {
      paddingLeft: 100,
      paddingRight: 0,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    }
});