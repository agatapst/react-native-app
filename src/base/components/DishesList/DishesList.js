import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Styles from './Styles';
import DishItem from '../DishItem/DishItem';

export default function DishesList(props) {
  const { dishes } = props;
  const { list } = Styles;

  return (
    <FlatList
      style={list}
      data={dishes.data}
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
        />
      )}
    />
  );
}

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
