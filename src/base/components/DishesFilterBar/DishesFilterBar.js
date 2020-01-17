import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Styles from './Styles';
import CheckboxBadge from '../CheckboxBadge';
import dishTypeFilters from '../../constants/DishTypeFilters';

const { container } = Styles;

const DishesFilterBar = ({ isDisabled, onChange: changeFilters }) => {
  const [filters, setFilters] = useState({});

  const onChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    changeFilters(newFilters);
  };

  return (
    <View style={container}>
      {Object.keys(dishTypeFilters).map((filterValue) => (
        <CheckboxBadge
          key={filterValue}
          isDisabled={isDisabled}
          onChange={(isChecked) => { onChange(filterValue, isChecked); }}
        >
          {dishTypeFilters[filterValue]}
        </CheckboxBadge>
      ))}
    </View>
  );
};

DishesFilterBar.propTypes = {
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

DishesFilterBar.defaultProps = {
  isDisabled: false,
  onChange: undefined,
};

export default DishesFilterBar;
