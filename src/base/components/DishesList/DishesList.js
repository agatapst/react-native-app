import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Styles from './Styles';
import DishItem from '../DishItem/DishItem';

export default function DishesList({ dishes, onPress, ...props }) {
  const { list } = Styles;

  return (
    <FlatList
      style={list}
      data={dishes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
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
          key={index}
          onPress={() => onPress(item.id)}
        />
      )}
      {...props}
    />
  );
}

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPress: PropTypes.func.isRequired,
};
