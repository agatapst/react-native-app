import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { addDishToShoppingList, removeDishFromShoppingList } from '../../../modules/shopping-list/redux/actions';

const AddToShoppingListButton = ({ style, dishId }) => {
  const shoppingList = useSelector((state) => state.shoppingList.dishes.dishesIds);
  const dispatch = useDispatch();

  const isAddedToShoppingList = shoppingList.filter((id) => id === dishId).length === 1;

  const onPress = () =>
    dispatch(isAddedToShoppingList ? removeDishFromShoppingList(dishId) : addDishToShoppingList(dishId));

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
