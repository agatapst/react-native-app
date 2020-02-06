import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ScreenContainer from '../../components/ScreenContainer';
import { generateShoppingList } from '../../../modules/shopping-list/redux/actions';
import Routes from '../../constants/Routes';
import Styles from './Styles';
import NoItemsMessage from '../../components/NoItemsMessage/NoItemsMessage';
import IngredientsList from '../../components/IngredientsList';

const ShoppingListScreen = () => {
  const dispatch = useDispatch();
  const dishesIds = useSelector((state) => state.shoppingList.dishes.dishesIds);
  const ingredients = useSelector((state) => state.shoppingList.ingredients.data);
  const screen = useSelector((state) => state.navigation.screen);

  const uncommon = ingredients ? ingredients.uncommon : [];
  const common = ingredients ? ingredients.common : [];

  useEffect(() => {
    if (screen === Routes.SHOPPING_LIST_ROUTE) {
      dispatch(generateShoppingList(dishesIds));
    }
  }, [dishesIds, screen]);

  return (
    <ScreenContainer>
      <View style={Styles.container}>
        <View>
          <Text style={Styles.headerTitle}>Shopping List</Text>

          {dishesIds.length ? (
            <>
              <IngredientsList ingredients={uncommon} />

              {common.length > 0 && (
                <View style={Styles.separator} />
              )}

              <IngredientsList ingredients={common} />
            </>
          ) : (
            <NoItemsMessage text="There are no dishes selected" />
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};

export default ShoppingListScreen;
