import { StyleSheet } from 'react-native';

export const MealAndDrink = StyleSheet.create({
    //Meal and Cocktail screens (MealScreen.js & CocktailScreen.js)

    //SEARCH INPUT
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafff0f6',
        borderWidth: 3,
        borderColor: '#6A994E',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    textInput: {
        flex: 1,
        height: 50,
    },
    icon: {
        marginRight: 10,
    },


    // CATEGORY
    categoryButton: {
        backgroundColor: '#386641',
        marginHorizontal: 5,
        borderRadius: 15,
        elevation: 10,
        borderWidth: 1,
        width: 140,
        overflow: 'hidden',
    },

    categoryContainer: {
        width: '100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    categoryImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover',
    },
    overlay: {
        backgroundColor: '#386641a5',
        width: '99%',
        borderRadius: 5,
    },

    categoryText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 1,
        padding: 7,
        borderRadius: 5,
    },

    // SELECTED CATEGORY
    selectedCategory: {
        borderColor: '#f67b43',
        borderWidth: 3,
    },

    selectedCategoryText: {
        color: '#FFC6AC',
    },

    // FLATLIST
    foodList: {
        height: '60%',
    },

    categoryList: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 2,
        height: '12%',
    },

    //MEALS AND DRINKS
    mealSelect: {
        alignItems: 'center',
        marginBottom: 20,
    },
    mealImage: {
        width: '99%',
        height: 170,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    mealTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        color: 'white',
        backgroundColor: '#386641', //386641a5
        width: '99%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },

    //RECIPE SCREENS ((MealDetailScreen.js & CocktailDetailScreen.js))
    innerContainerMealDS: {
        backgroundColor: '#f3fff5e9',
        borderRadius: 10,
    },

    scrollContentMealDS: {
        padding: 10,
    },
    imageDS: {
        height: 250,
        elevation: 2,
        borderRadius: 10,
    },

    //Also found in PrintList.js
    titleDS: {
        borderBottomWidth: 2,
        borderColor: '#6A994E',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
    
    sectionTitleDS: {
        borderBottomWidth: 2,
        borderColor: '#6A994E',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        margin: 15,
    },
    ingredientDS: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#ffc6ac',
        backgroundColor: '#ffeee694',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 26,
        paddingVertical: 5,
        marginHorizontal: 20,

    },
    instructionsDS: {
        fontSize: 16,
        lineHeight: 30,
        marginHorizontal: 15,
        paddingVertical: 5,
    },
    foodDetCat: {
        marginHorizontal: 15,
    },
    foodDetCatTitle: {
        height: 50,
        alignContent: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },

    //modal style SaveIngredients

    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark semi-transparent background
        padding: 20,
    },
    selectedIngredient: {
        fontSize: 18,
        color: '#444',
        marginVertical: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
        fontStyle: 'italic',
        maxWidth: 300,
    },
    savedIngredientsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 15,
    },
    savedIngredient: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    button: {
        backgroundColor: '#6C63FF', // Modern button color
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 25,
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#FF6F61', // Red color for close
    },

    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
    



})

