import React from 'react';
import { SafeAreaView, Image, View, FlatList, StyleSheet, Text, StatusBar, Pressable} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { useState } from 'react';

const FRIENDS = [
  {
    id: '1',
    title: 'Renchie Y.',
  },
  {
    id: '2',
    title: 'How C.',
  },
  {
    id: '3',
    title: 'John D.',
  },
];

function Item({title})  {
  let state = {isVisible: true};
  
  let eyeImg = require("../assets/eye.png");
  let crossEyeImg = require("../assets/crossEye.png");
  const [eye, setEye] = useState(true)

  return (
    <View style={styles.item}>
      <Text style={styles.circle}> </Text>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.options}>
        <Pressable
          onPress={() => setEye(!eye)}
        >
          <Image style={styles.eye} source={eye? eyeImg: crossEyeImg}/>
        </Pressable>
        <Pressable
          onPress={() => console.log("Delete")}
          style={( {pressed} ) => {
            return [pressed ? styles.pressed: styles.notPressed]
          }}
        >
          <Text style={styles.cross}>X</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function FriendsList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={FRIENDS}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#eaeaea",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 20
  },
  title: {
    fontSize: 16,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 10
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: "#CCCCCC",
    borderRadius: 30,
    marginTop: "auto",
    marginBottom: "auto",
  },
  cross: {
    position: "relative",
    color: "red",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 25,
    fontWeight: "bold"
  },
  eye: {
    width:30,
    height:30,
    resizeMode: "contain",
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 10,
  },
  options: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "2%",
  },
  pressed: {
    opacity: 0.2,
  },
  notPressed: {
    opacity: 1
  }
});