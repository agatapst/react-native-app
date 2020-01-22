/* eslint-disable operator-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default function DishQuantityLabel({ quantity, quantityType }) {
  const quantityTypes = {
    spoons: {
      singular: 'tablespoon',
      plural: 'tablespoons',
    },
    small_spoons: {
      singular: 'teaspoon',
      plural: 'teaspoons',
    },
    pieces: {
      singular: 'piece',
      plural: 'pieces',
    },
    milliliters: {
      singular: 'milliliter',
      plural: 'milliliters',
    },
    rice_pack: {
      singular: 'rice pack',
      plural: 'rice packs',
    },
    pinch: {
      singular: 'pinch',
      plural: 'pinch',
    },
    grams: {
      singular: 'gram',
      plural: 'grams',
    },
    kilograms: {
      singular: 'kilogram',
      plural: 'kilograms',
    },
  };

  return (
    <View>
      {quantity && (
        <Text>
          {`${quantity} `}
          {quantityTypes[quantityType] &&
            (quantity > 1
              ? quantityTypes[quantityType].plural
              : quantityTypes[quantityType].singular)}
        </Text>
      )}
    </View>
  );
}
DishQuantityLabel.propTypes = {
  quantity: PropTypes.number.isRequired,
  quantityType: PropTypes.string.isRequired,
};
