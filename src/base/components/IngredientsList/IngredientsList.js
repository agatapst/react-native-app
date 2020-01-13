import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles';

export default function IngredientsList() {
  const { container } = Styles;

  return (
    <View style={container}>
      <Text>Ingredients List</Text>
    </View>
  );
}

IngredientsList.propTypes = {};
