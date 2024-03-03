import { StyleSheet, Text, View, Pressable, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function AddMemory({navigation}) {

  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Create Memory</Text>
        <Pressable
          onPress = {() => navigation.navigate("Main")}
        >
          <Text style={styles.cancelMemoryCreation}>X</Text>
        </Pressable>
        
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.titleInput}
          placeholder={'Memory Title'}
          />
        <TextInput 
        style={styles.descInput}
        placeholder={'Description'}
        multiline={true}
        />
      </View>
      <Pressable
        onPress={() => pickImage()}
        style={( { pressed } ) => {
          return [styles.uploadButton, pressed ? styles.pressed : styles.notPressed]
          }}
      >
        <Text style={styles.uploadText}>Upload</Text>
        <Image style={styles.uploadImg} source={require("./assets/upload.png")}/>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressed: {
    opacity: 0.4
  },
  notPressed: {
    opacity: 1
  },
  topBar: {
    flexDirection: "row",
    marginTop: "10%"
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 25
  },
  cancelMemoryCreation: {
    top: 0,
    right: 15,
    position: "absolute",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    marginBottom: "5%"
  },
  titleInput: {
    width: 350,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d6d4d0',
    textAlign:'center',
    fontSize: 18,
    marginBottom: "10%"

  },
  descInput: {
    width: 350,
    height: 300,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d6d4d0',
    textAlign:"left",
    textAlignVertical: "top",
    fontSize: 18,

  },
  uploadButton: {
    width: 150,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#8A51C4",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10
  },
  uploadText: {
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: "10%",
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  uploadImg: {
    height: 45,
    width: 50,
    resizeMode: "contain",
    marginHorizontal: "5%",
  }
});