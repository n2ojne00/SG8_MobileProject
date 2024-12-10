import { StyleSheet } from 'react-native';

export const PrintList = StyleSheet.create({
      //PrintListScreen.js
  shoppinglistItem: {
    fontSize: 18,
    marginTop: 10, 
    paddingVertical: 8, 
    paddingHorizontal: 15, 
    borderWidth: 1, 
    borderRadius: 8, 
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  innerContainerPrintList: {
    borderRadius: 10,
    height: '100%',
  },
  createButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    width: 245,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    alignItems: 'center',
    elevation:2,
    marginBottom: 40,
  },
  buttonTextRL: {
    fontSize: 16,
    alignContent: 'center',
    alignItems: 'center',
  },

})