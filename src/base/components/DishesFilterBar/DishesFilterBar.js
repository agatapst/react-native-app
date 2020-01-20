import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Styles from './Styles';
import CheckboxBadge from '../CheckboxBadge';
import dishTypeFilters from '../../constants/DishTypeFilters';

const { container } = Styles;

const DishesFilterBar = ({ onChange: changeFilters }) => {
  const [, setFilters] = useState({});

  const onChange = useCallback((key, value) => {
    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [key]: value,
      };
      changeFilters(newFilters);

      return newFilters;
    });
  }, [setFilters]);

  return (
    <View style={container}>
      {Object.keys(dishTypeFilters).map((filterValue) => (
        <CheckboxBadge
          key={filterValue}
          onChange={(isChecked) => { onChange(filterValue, isChecked); }}
        >
          {dishTypeFilters[filterValue]}
        </CheckboxBadge>
      ))}
    </View>
  );
};

DishesFilterBar.propTypes = {
  onChange: PropTypes.func,
};

DishesFilterBar.defaultProps = {
  onChange: undefined,
};

export default DishesFilterBar;
