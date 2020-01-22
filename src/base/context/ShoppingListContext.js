import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingListContext = React.createContext({});

const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState({});

  const addDish = (dishId) => {
    setShoppingList((prevState) => ({ ...prevState, [dishId]: dishId }));
  };

  const removeDish = (dishIdToRemove) => {
    setShoppingList((prevState) => {
      const newState = { ...prevState };
      delete newState[dishIdToRemove];
      return newState;
    });
  };

  const clear = () => setShoppingList({});

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        addDish,
        removeDish,
        clear,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

ShoppingListProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ShoppingListProvider.defaultProps = {
  children: null,
};

export default ShoppingListProvider;
