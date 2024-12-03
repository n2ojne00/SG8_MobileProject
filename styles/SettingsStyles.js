import { StyleSheet } from 'react-native';

export const Settings = StyleSheet.create({
   //SettingsScreen.js
  settingItem: {
    backgroundColor: '#f2ffff75',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#386641',
    marginBottom: 20,
  },
  settingsLogin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 20,
    borderWidth: 1,
  },
  //Also in LocalLoginScreen.js RegisterScreen.js
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    paddingVertical: 10,

  },
//Also in LocalLoginScreen.js RegisterScreen.js
  accountInput: {
    width: '90%',
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#386641',
    borderRadius: 5,
    backgroundColor: '#ecffeff5',

  },
  saveButtonText: {
    color: '#386641',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#386641',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    width: '50%',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingInfo: {
  },

})