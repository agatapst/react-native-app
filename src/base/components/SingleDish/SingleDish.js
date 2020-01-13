import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList } from 'react-native';
import Styles from './Styles';

export default function SingleDish({ singleDishDetails, ...props }) {
  const { container } = Styles;

  return (
    <View style={container}>
      <Text>Ingredients List</Text>
      <FlatList
        data={singleDishDetails}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        {...props}
      />
    </View>
  );
}

SingleDish.propTypes = {
  singleDishDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
