import { Text, StyleSheet,  } from 'react-native';

function Car(props) {
    return <li><Text>I am a { props.brand }</Text></li>;
  }
  
export default function FriendsList() {
const cars = ['Ford', 'BMW', 'Audi'];
return (
    <>
    <ul>
        {cars.map((car) => <Car brand={car} />)}
    </ul>
    </>
);
}

const styles = StyleSheet.create({

});
