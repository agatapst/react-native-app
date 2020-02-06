import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, View } from 'react-native';
import Styles from './Styles';
import NoItemsMessage from '../NoItemsMessage/NoItemsMessage';

const IngredientsList = ({ ingredients }) => {
  const keyExtractor = (ingredient) => ingredient.id;

  return (
    <FlatList
      style={{}}
      data={ingredients}
      scrollToOverflowEnabled
      keyExtractor={keyExtractor}
      renderItem={({ item: ingredient, index: i }) => (
        <View style={i + 1 < ingredients.length ? Styles.item : Styles.lastItem}>
          <View style={Styles.icon} />
          <Text key={ingredient.id} style={Styles.text}>
            {ingredient.name}
            {' - '}
            {ingredient.quantity}
            {' '}
            {ingredient.quantityType}
          </Text>
        </View>
      )}
    />
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IngredientsList;
