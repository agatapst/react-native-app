import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import Styles from './Styles';
import DishItem from '../DishItem/DishItem';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

export default function DishesList({ dishes, onPress, onEndReached }) {
  const { list } = Styles;

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  return (
    <FlatList
      style={list}
      data={dishes}
      scrollToOverflowEnabled
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.01}
      initialNumToRender={0}
      maxToRenderPerBatch={1}
      ListHeaderComponent={() => (<HeaderTitle>Choose a recipe:</HeaderTitle>)}
      ListEmptyComponent={() => (<Text>No dishes matching criteria</Text>)}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <DishItem
          name={item.name}
          description={item.description}
          preparationTime={item.preparationTime}
          portions={item.portions}
          isVegan={item.isVegan}
          isVegetarian={item.isVegetarian}
          isGlutenFree={item.isGlutenFree}
          isLactoseFree={item.isLactoseFree}
          image={item.image}
          onPress={() => onPress(item.id)}
        />
      )}
    />
  );
}

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPress: PropTypes.func.isRequired,
  onEndReached: PropTypes.func.isRequired,
};
