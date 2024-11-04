import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ingredient: {
    fontSize: 16,
    paddingLeft: 10,
  },
  instructions: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  containerMealDS: {
    flex: 1,
  },
  scrollContentMealDS: {
    flexGrow: 1,
    padding: 25,
  },
  innerContainerMealDS: {
    flex: 1,
  },
  imageMealDS: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  titleMealDS: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionTitleMealDS: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  ingredientMealDS: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
  },
  instructionsMealDS: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  containerMealScr: {
    flex: 1,
    padding: 16,
  },
  inputMealScr: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  itemMealScr: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  imageMealScr: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  titleMealScr: {
    fontSize: 18,
  },
  containerShop: {
    flex: 1,
    padding: 16,
  },
  inputShop: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  itemContainerShop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemShop: {
    fontSize: 16,
  },
  removeShop: {
    color: 'red',
  },
});