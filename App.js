import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import ImageButton from './components/ImageButton';
import SmallTextButton from './components/SmallTextButton';
import SlidingUpPanel from 'rn-sliding-up-panel';
import FriendsList from './components/FriendsList';
import AccountTabView from './components/AccountMenu';

const image = { uri: 'https://www.eaglecreek.com/cdn/shop/articles/An_20empty_20page_20in_20a_20travel_20journal.jpg' }
let panelVal = 0

export default function App() {

  const [isToggled, setIsToggled] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(<></>);

    const handleChange = () => {
    setIsToggled(!isToggled);
    if (isToggled) {
      // console.log("Changing to Showing");
      this._panel.show(600);
    }
    else {
      // console.log("Change to hiding");
      this._panel.hide();
    }
  }

  const handleAccountChange = () => {
    setTitle("Account")
    setContent(<AccountTabView/>)
    handleChange()
  }

  const handleFriendsChange = () => {
    setTitle("Friends")
    setContent(<FriendsList/>)
    
    handleChange()
  }

  const handleActivityChange = () => {
    setTitle("Recent Activity")
    // setContent(<Recent Activity/>)
    setContent(<></>)
    handleChange()
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>

        {/* Top Buttons */}
        <View style={styles.cameraButton}>
          <ImageButton 
            onPress={() => console.log("Button as component")} 
            source={require("./assets/camera.png")}
          />
        </View>
        <View style={styles.drawButton}>
          <ImageButton 
            onPress={() => console.log("Button as component")} 
            source={require("./assets/pencil.png")}
          />
        </View>
        {/* Bottom Stuff */}
        <SlidingUpPanel ref={c => this._panel = c} allowDragging={true} draggableRange={{top: 600, bottom: 0}} snappingPoints={[0, 600]}>
          <View style={styles.friends}>
            <Text style={styles.dragBox}> </Text>
            <Text style={styles.friendsListTitle}>{title}</Text>
              {content}
          </View>
        </SlidingUpPanel>
        <View style={styles.dashboard}>
          <View style={styles.bottomButton}>
            <SmallTextButton onPress={() => handleFriendsChange()} text="Friends"/>
          </View>
          <ImageButton 
            onPress={() => handleActivityChange()} 
            source={require("./assets/journaly-logo.png")}
            imageStyle={styles.logoButton}
          />
          <View style={styles.bottomButton}>
            <SmallTextButton onPress={() => handleAccountChange()} text="Account"/>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  cameraButton: {
    position: "absolute",
    left: 15,
    top: 40
  },
  drawButton: {
    position: "absolute",
    right: 15,
    top: 40
  },
  bottomButton: {
    marginBottom: 20,
    marginHorizontal:10
  },
  dashboard: {
    position: "absolute",
    width:"100%",
    height:"15%",
    paddingTop:"7%",
    justifyContent: "center",
    bottom:0,
    backgroundColor: "white",
    flexDirection: "row",
  },
  logoButton: {
    width: 70,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom:20
  },
  friends: {
    backgroundColor: "#F5F5F5",
    height: "100%",
    borderRadius:20
  },
  friendsListTitle: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 5,
    fontSize: 30,
  },
  dragBox: {
    backgroundColor: "#D0D0D0",
    width: "17%",
    height: 6,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:6,
    borderRadius:10
  }
});
