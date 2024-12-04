//CURRENTLY NOT USING THESE
import { StyleSheet } from 'react-native';

export const ShopList = StyleSheet.create({
    //SHOPPING LIST (ShoppingListScreen.js)

    shopListCreation: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f3fff5ac',
    },
    addItem: {
        justifyContent: 'center',
        flexDirection: 'row',
    },

    addShopButton: {
        height: 50,
        width: 50,
        backgroundColor: '#6A994E',
        marginLeft: 20,
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',    
    },
    inputShopListName: {
        height: 50,
        fontSize: 20,
        paddingLeft: 15,
        width: 360,
    },
    inputShopListItem: {
        height: 50,
        width: '75%',
        paddingLeft: 15,
        borderBottomWidth: 2,
        borderColor: '#6A994E'
    },
    currentListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#386641',
        backgroundColor: '#fcf6eb',
        borderRadius: 5,
        marginVertical: 5,
        elevation: 2,
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#539861',
        width: '95%',
        marginHorizontal: 10,
    },
    itemText: {
        paddingVertical: 8,
        paddingLeft: 16,
        fontSize: 18,
        color: '#386641',
    },
    savedListItem: {
        marginLeft: 20,
    },
    savedListText: {
        fontSize: 20,
        textDecorationLine: 'underline',
    },

    mapContainer: {
        marginTop: 20,
        height: 300,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    errorText: {
        textAlign: 'center',
        color: '#ff6b6b',
        fontSize: 16,
    },

})