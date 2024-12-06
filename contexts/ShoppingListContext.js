import React, { createContext, useState, useContext } from 'react';

const ShoppingListContext = createContext();

export const useShoppingList = () => useContext(ShoppingListContext);

export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  const addToShoppingList = (item) => {
    setShoppingList((prevList) => [...prevList, item]);
  };

  return (
    <ShoppingListContext.Provider value={{ shoppingList, addToShoppingList }}>
      {children}
    </ShoppingListContext.Provider>
  );
};
