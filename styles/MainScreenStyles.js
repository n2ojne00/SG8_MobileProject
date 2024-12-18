import { StyleSheet } from 'react-native';

export const MainStyles = StyleSheet.create({

    MainContainer: {
        paddingHorizontal: '2%',
        flex: 1,
    },
    logo: {
        width: '100%',
        height: 250,
        marginVertical: 10,
    },
    WelcomeAnimation: {
        fontSize: 17,
        justifyContent: 'center',
        textAlign: 'center',
        width: 350,
        height: 70,
        borderWidth: 4,
        borderStyle: 'dashed',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        paddingVertical: 10, // Vertical padding for spacing
        paddingHorizontal: 15, // Horizontal padding for spacing
        fontWeight: 'bold', // Bold text for emphasis
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
        //backgroundColor: '#f3fff5',
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
        minHeight: 240, // Set a minimum height
        justifyContent: 'space-between', // Space out elements
        alignItems: 'center', // Center elements horizontally
    },
    ofTheDayTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#386641',
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
        width: '100%',
        height: 'auto', // Allow dynamic height

    },
    ofTheDayImage: {
        width: '100%',
        height: 175,
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
        //backgroundColor: '#f3fff5ac',
        borderTopEndRadius: 100,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 100,
        borderBottomEndRadius: 10,
    },
    bookImage: {
        width: '100%',
        height: '100%',
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
        padding: 15,
        borderRadius: 60,
        width: '35%',
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
        padding: 5,
        width: '100%',
        borderBottomWidth: 2,
    },
    articleCarousel: {
        paddingVertical: 10,
        elevation: 2,
    },
    articleContainer: {
        width: 200,
        marginRight: 15,
        padding: 10,
        borderRadius: 8,
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
        borderBottomWidth: 2,
        borderTopWidth: 2,

    },
    articleContent: {
        fontSize: 16,

    },

    //Article Modal (MainScreen)
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2525257e',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#f3fff5',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',

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
        width: '100%',
        borderBottomWidth: 2,
        borderTopWidth: 2,

    },
    modalDescription: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        width: '100%',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    modalScroll: {
        maxHeight: 300,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },

})