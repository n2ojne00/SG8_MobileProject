import { StyleSheet } from 'react-native';

export const MealAndDrink = StyleSheet.create({
    //Meal and Cocktail screens (MealScreen.js & CocktailScreen.js)

    //SEARCH INPUT
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
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
        width: '99%',
        borderRadius: 5,
    },

    categoryText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 1,
        padding: 7,
        borderRadius: 5,
    },

    // SELECTED CATEGORY
    selectedCategory: {
        borderWidth: 3,
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
        width: '99%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },

    emptyMessage: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

    //RECIPE SCREENS ((MealDetailScreen.js & CocktailDetailScreen.js))
    innerContainerMealDS: {
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
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
    
    sectionTitleDS: {
        borderBottomWidth: 2,
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        margin: 15,
    },
    ingredientDS: {
        textAlign: 'center',
        borderBottomWidth: 1,
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




})

