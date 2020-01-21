import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

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
      singular: 'mililitr',
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
  };

  return (
    <Text>
      {quantity}
      {quantity > 1 && quantityType
        ? ` ${quantityTypes[quantityType].plural}`
        : ` ${quantityTypes[quantityType].singular}`}
    </Text>
  );
}
DishQuantityLabel.propTypes = {
  quantity: PropTypes.number.isRequired,
  quantityType: PropTypes.string.isRequired,
};
