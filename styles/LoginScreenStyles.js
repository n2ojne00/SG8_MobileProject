import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({

// LoginScreen.js LocalLoginScreen.js 

//RegisterScreen.js  //LocalLoginScreen.js
titleLogin: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 24,
  textAlign: 'center',

},

  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  buttonLogin: {
    justifyContent: 'center',
    marginTop: 20,

    width: 300,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 2
  },
  buttonTextLogin: {

    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeText: {
    fontSize: 20,

    textAlign: 'center',
    marginVertical: 20,
    padding: 20,

  },

})