import { StyleSheet } from 'react-native';

export const RecipeList = StyleSheet.create({
    recipeContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    recipeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        height: 120,
        width: '95%',
        alignSelf: 'center',
    },

    recipeImageContainer: {
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    recipeImageThumbnail: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },

    recipeTextContainer: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        marginLeft: 10,
    },

    recipeListName: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    recipeDate: {
        fontSize: 12,
    },

    deleteButtonContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    deleteButton: {
        padding: 5,
        borderRadius: 5,
    },

    emptyText: {
        fontSize: 18,
        color: '#386641',
        textAlign: 'center',
        marginVertical: 20,
    },

    createButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        width: 200,
        height: 40,
        borderRadius: 30,
        borderWidth: 2,
        alignItems: 'center',
        marginBottom: 40,
    },

    buttonTextRL: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5,
    },

});
