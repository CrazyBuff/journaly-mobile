import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import StyledButton from './components/StyledButton';



const image = { uri: 'https://www.eaglecreek.com/cdn/shop/articles/An_20empty_20page_20in_20a_20travel_20journal.jpg' }

export default function Login({navigation}) {
  return (
      <View style={styles.container}>
        <Shadow
          containerViewStyle={{marginVertical: 20}}
          style={styles.shadowStyle}
          >
          <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <View style={styles.loginContainer}> 
              <Image 
                source={require('./assets/journaly-logo.png')}
                style={styles.logo}
              />
              <Text style={{fontSize: 23, marginTop: 10, marginBottom: 50}}>Welcome to Journaly</Text>
              <SafeAreaView>
                <TextInput 
                  style={styles.input}
                  placeholder={'Username'}
                  />
                <TextInput 
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={true}
                />
              </SafeAreaView>
              <Text style={{color:'#51C3C4', marginTop: 10 }}>Forgot Password?</Text>
              <StyledButton 
                onPress={() =>
                    navigation.navigate('Main')
                  }
                text={'Login'}
                textStyle={styles.loginBtnText}
                buttonStyle={styles.button}
              />
              <Text style={{marginTop: 40}}>Don't have an account yet?</Text>
              <Text style={{color:'#51C3C4', marginTop: 5 }}>Create Account</Text>
            </View>
            
          </ImageBackground>
        </Shadow>
      
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
    paddingRight: 15,
    paddingLeft: 15
  },
  loginContainer: {
    height: 700,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center'

  },
  shadowStyle: {
    height: '100%',
    width: '100%'
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: '20%'
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d6d4d0',
    textAlign:'center',
    fontSize: 18,
    marginBottom: 10
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#51C3C4',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center'
  },
  loginBtnText: {
    color:'white', 
    fontSize: 18,
  }  
});
