import { StyleSheet } from 'react-native';
import { HelperText } from 'react-native-paper';

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: '#f2ffffae',
    paddingTop: 80,
  },
  background: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 250,
    marginVertical: 10,
  },
helperText: {
    fontSize: 14, // Subtle and small but readable
    fontWeight: '400', // Light weight for non-intrusive appearance
    textAlign: 'center', // Center-align for balanced layout
    marginVertical: 10, // Space above and below the text
    paddingHorizontal: 16, // Ensure it doesn't touch edges on smaller screens
    lineHeight: 20, // Good line spacing for readability
},

  // Themelayout.js
  ThemeLayoutBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  ThemeLayoutContent: {
    flex: 1,
  },




})