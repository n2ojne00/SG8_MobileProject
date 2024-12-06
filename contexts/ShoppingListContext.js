import React, { createContext, useState, useContext } from 'react';

const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  const addToShoppingList = (item) => {
    setShoppingList((prevList) => [...prevList, item]);
  };

  const removeFromShoppingList = (item) => {
    setShoppingList((prevList) => prevList.filter((shoppingItem) => shoppingItem !== item));
  };

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        addToShoppingList,
        removeFromShoppingList,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => useContext(ShoppingListContext);
