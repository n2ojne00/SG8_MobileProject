//CURRENTLY NOT USING THESE
import { StyleSheet } from 'react-native';

export const ShopList = StyleSheet.create({
    //SHOPPING LIST (ShoppingListScreen.js)

    shopListCreation: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
    },
    addItem: {
        justifyContent: 'center',
        flexDirection: 'row',
    },

    addShopButton: {
        height: 50,
        width: 50,
        borderWidth: 2,
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
    },
    currentListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        elevation: 2,
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        width: '95%',
        marginHorizontal: 10,
    },
    itemText: {
        paddingVertical: 8,
        paddingLeft: 16,
        fontSize: 18,
    },
    listItem: {
        flexDirection: 'row',
        width: '93%',
        borderBottomWidth: 1,
        padding: 5,
    },
    savedListText: {
        fontSize: 20,
    },

    mapContainer: {
        marginVertical: 20,
        height: 350,
        width: '100%',
        borderWidth: 1.9, 
        borderRadius: 5,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    errorText: {
        textAlign: 'center',
        fontSize: 16,
    },

})