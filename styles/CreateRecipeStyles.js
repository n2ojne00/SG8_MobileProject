import { StyleSheet } from 'react-native';

export const CreateRecipe = StyleSheet.create({
    //CREATE RECIPE (CreateRecipeScreen.js)
    recipeContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    recipeTitle: {
        justifyContent: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    recipeName: {
        height: 55,
        width: '80%',
        borderWidth: 2,
        //borderColor: '#386641',
        //backgroundColor: '#fcf6eb',
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 10,
    },
    recipeTextAreas: {
        width: '90%',
        paddingVertical: 15,
        borderWidth: 2,
        borderRadius: 10,
        //borderColor: '#386641',
        alignItems: 'center',
        //backgroundColor: '#fcf6eb'
    },

    recipeInput: {
        height: 50,
        width: 250,
        paddingHorizontal: 8,
    },
    ingredientsinput: {
        width: '85%',
        height: 150,
        //borderColor: '#386641',
        borderWidth: 2,
        marginBottom: 5,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
        paddingTop: 8,

    },
    guideinput: {
        width: '85%',
        height: 200,
        //borderColor: '#386641',
        borderWidth: 2,
        paddingHorizontal: 8,
        textAlignVertical: 'top',
        paddingTop: 8,
        marginBottom: 15,

    },
    //This found  (MainScreen.js, SettingScreen.js)
    saveRecipeBtn: {
        justifyContent: 'center',
        marginTop: 20,
        //backgroundColor: '#dbfaEB',
        width: 120,
        height: 40,
        borderRadius: 30,
        borderWidth: 2,
        //borderColor: '#386641',
        alignItems: 'center',
    },

    //Also in RecipeDetailScreen.js
    photoSection: {
        width: '90%',
        alignItems: 'center',

    },
    photoButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    recipePhoto: {
        height: 250,
        width: '90%',
        elevation: 2,
        borderRadius: 10,
    },
    photoButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#386641',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        width: '40%',
        marginTop: 10,
        marginHorizontal: 15,
    },
    

})