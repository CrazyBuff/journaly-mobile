import { Image, Pressable, Text, View, StyleSheet } from 'react-native';

export default function SmallTextButton({ onPress, text}) {
  return (
      <Pressable
      onPress={onPress} 
      style={( { pressed } ) => {
        return [styles.row, pressed ? styles.pressed : styles.notPressed]
        }}>
        <Text style={styles.text}>{text}</Text>
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize:18,
        width: 120,
        textAlign: "center",
        color: "white",
        backgroundColor: "#51C3C4",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10
    },
});
