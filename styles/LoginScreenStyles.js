import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({

// LoginScreen.js LocalLoginScreen.js 

//RegisterScreen.js  //LocalLoginScreen.js
titleLogin: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 24,
  textAlign: 'center',
  color: '#333',
},

  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2ffffae',

  },
  buttonLogin: {
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#dbfaEB',
    width: 300,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 2
  },
  buttonTextLogin: {
    color: '#386641',
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeText: {
    fontSize: 20,
    color: '#386641',  // Darker color for readability
    textAlign: 'center',
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#f3fff5ac',
  },

})