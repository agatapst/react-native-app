import React, { useContext } from 'react';
import { View } from 'react-native';
import Styles from './Styles';
import CheckboxBadge from '../CheckboxBadge';
import dishTypeFilters from '../../constants/DishTypeFilters';
import { DishesFiltersContext } from '../../screens/DishesScreen/DishesScreen';

const { container } = Styles;

const DishesFilterBar = () => {
  const { filters, changeFilters } = useContext(DishesFiltersContext);

  return (
    <View style={container}>
      {Object.keys(dishTypeFilters).map((filterValue) => (
        <CheckboxBadge
          key={filterValue}
          isChecked={filters[filterValue]}
          onChange={(isChecked) => {
            changeFilters((prevFilters) => ({
              ...prevFilters,
              [filterValue]: isChecked,
            }));
          }}
        >
          {dishTypeFilters[filterValue]}
        </CheckboxBadge>
      ))}
    </View>
  );
};

export default DishesFilterBar;
