import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, View } from 'react-native';
import Colors from '../../constants/Colors';
import { ShoppingListContext } from '../../context/ShoppingListContext';

const AddToShoppingListButton = ({ style, dishId }) => {
  const { shoppingList, addDish, removeDish } = useContext(ShoppingListContext);

  const isAddedToShoppingList = !!shoppingList[dishId];

  const onPress = () => {
    if (isAddedToShoppingList) {
      removeDish(dishId);
    } else {
      addDish(dishId);
    }
  };

  return (
    <View style={{ ...style }}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialIcons
          name={isAddedToShoppingList ? 'remove-shopping-cart' : 'add-shopping-cart'}
          color={Colors.white}
          size={26}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

AddToShoppingListButton.propTypes = {
  dishId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

AddToShoppingListButton.defaultProps = {
  style: {},
};

export default AddToShoppingListButton;
