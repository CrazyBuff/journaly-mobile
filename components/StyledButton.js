import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function StyledButton({ onPressOut, text, buttonStyle, textStyle }) {
  return (
      <Pressable
        onPressOut={onPressOut} 
        style={( { pressed } ) => {
            return [pressed ? styles.pressed : styles.notPressed]
            }}
        >
        <View style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
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
    }
});