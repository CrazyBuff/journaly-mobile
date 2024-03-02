import { Image, Pressable, Text, View, StyleSheet } from 'react-native';

export default function ImageButton({ onPress, source, imageStyle = styles.imageStyle}) {
  return (
      <Pressable
      onPress={onPress} 
      style={( { pressed } ) => {
        return [styles.row, pressed ? styles.pressed : styles.notPressed]
        }}>
        <View style={styles.view}> 
            <Image style={imageStyle} source={source} />
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.6
    },
    notPressed: {
        opacity: 1
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginLeft: "auto",
        marginRight: "auto"    
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        margin: 16
    },
    view: {
        padding:10,
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
    }
});
