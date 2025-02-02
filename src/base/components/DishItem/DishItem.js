/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Badge from '../Badge';
import Styles from './Styles';
import dishTypeFilters from '../../constants/DishTypeFilters';
import { DishesFiltersContext } from '../../screens/DishesScreen/DishesScreen';

export default function DishItem(props) {
  const {
    name,
    description,
    preparationTime,
    portions,
    image,
    onPress,
  } = props;
  const {
    listElementHeader,
    listElementDescription,
    listBox,
    container,
    badges,
    icon,
    img,
    row,
    iconsRow,
    additionalInfo,
  } = Styles;
  const { changeFilters } = useContext(DishesFiltersContext);

  return (
    <View style={container}>
      <Image
        source={{
          uri: `http://localhost:3000/dish-image/${image}`,
        }}
        style={img}
      />
      <View style={listBox}>
        <TouchableOpacity onPress={onPress}>
          <Text style={listElementHeader}>{name}</Text>
        </TouchableOpacity>
        <Text style={listElementDescription}>{description}</Text>
        <View style={[row, iconsRow]}>
          <View style={row}>
            <Image
              source={require('../../../assets/images/time.png')}
              style={icon}
            />
            <Text style={additionalInfo}>Time: {preparationTime} minutes</Text>
          </View>
          <View style={row}>
            <Image
              source={require('../../../assets/images/portions.png')}
              style={icon}
            />
            <Text style={additionalInfo}>Portions: {portions}</Text>
          </View>
        </View>
        <View style={badges}>
          {Object.keys(dishTypeFilters).map((dishTypeFilterKey) => props[dishTypeFilterKey] && (
            <Badge onPress={() => { changeFilters({ [dishTypeFilterKey]: true }, false); }}>
              {dishTypeFilters[dishTypeFilterKey]}
            </Badge>
          ))}
        </View>
      </View>
    </View>
  );
}

DishItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  preparationTime: PropTypes.number.isRequired,
  portions: PropTypes.number.isRequired,
  isVegan: PropTypes.bool.isRequired,
  isVegetarian: PropTypes.bool.isRequired,
  isGlutenFree: PropTypes.bool.isRequired,
  isLactoseFree: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
