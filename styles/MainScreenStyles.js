import { StyleSheet } from 'react-native';

export const MainStyles = StyleSheet.create({

    MainContainer: {
        paddingHorizontal: 5,
        flex: 1,
        backgroundColor: '#f2ffffae',
    },
    logo: {
        width: '100%',
        height: 250,
        marginVertical: 10,
    },

    //Food/Drink of the DAY  (MainScreen)
    foodDrinkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 5,
        marginBottom: 10,
    },
    ofTheDayContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '49%',
        backgroundColor: '#f3fff5',
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderRadius: 15,
        elevation: 4,

    },
    otdNavigation: {
        width: '100%',
        backgroundColor: '#386641ec',
        paddingVertical: 15,
        paddingHorizontal: 7,
        borderRadius: 10,
        height: 240,
    },
    ofTheDayTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#386641',
        padding: 5,
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#f67b43'
    },
    otdRecipe: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        color: '#ffffff',
        borderTopWidth: 2,
        borderColor: '#f67b43',
        height: 55,
    },
    ofTheDayImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,

    },

    //RECIPE LIST AND CREATE RECIPE RecipeBook Section (MainScreen)
    bookContainer: {
        alignItems: 'center',
    },
    bookBackgroundContainer: {
        width: '100%',
        height: 200,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3fff5ac',
        borderTopEndRadius: 100,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 100,
        borderBottomEndRadius: 10,
    },
    bookImage: {
        width: '100%',
        height: '100%',
        tintColor: '#122215',
        position: 'absolute',
        resizeMode: 'stretch',
    },
    buttonOverlay: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },

    //Also in PrintListScreen.js, RecipeListScreen.js 
    RecipeButton: {
        backgroundColor: '#6a994e8e',
        padding: 15,
        borderRadius: 60,
        width: '32%',
        alignItems: 'center',
        marginBottom: 20,
    },
    recipeButtonText: {
        color: '#021e01',
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    recipeImage: {
        height: 90,
        width: 90,
    },


    //Article section (MainScreen)
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#386641',
        padding: 5,
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#f67b43'
    },
    articleCarousel: {
        paddingVertical: 10,
        backgroundColor: '#386641a9',
        elevation: 2,
    },
    articleContainer: {
        width: 200,
        marginRight: 15,
        backgroundColor: '#f3fff5',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginLeft: 8,
    },
    articleImage: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 3,
    },
    articleTitle: {
        paddingVertical: 3,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#122115',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: '#f67b43'
    },
    articleContent: {
        fontSize: 16,
        color: '#24422a',
    },

    //Article Modal (MainScreen)
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2525257e',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#f3fff5',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    modalTitle: {
        textAlign: 'center',
        paddingVertical: 3,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#122115',
        width: '100%',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: '#f67b43'
    },
    modalDescription: {
        fontSize: 17,
        color: '#386641',
        textAlign: 'center',
        marginBottom: 20,
    },





})