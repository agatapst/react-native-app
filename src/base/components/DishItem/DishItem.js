/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import Badge from '../Badge';
import Styles from './Styles';

export default function DishItem(props) {
  const {
    name,
    description,
    preparationTime,
    portions,
    isVegan,
    isVegetarian,
    isGlutenFree,
    isLactoseFree,
  } = props;
  const {
    listElementHeader,
    listElementDescription,
    listBox,
    image,
    container,
    badges,
    icon,
    row,
    additionalInfo,
  } = Styles;

  return (
    <View style={container}>
      <Image
        style={image}
        source={require('../../../assets/images/dish.jpeg')}
      />
      <View style={listBox}>
        <Text style={listElementHeader}>{name}</Text>
        <Text style={listElementDescription}>{description}</Text>
        <View style={row}>
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
          {isVegan && <Badge>Vegan</Badge>}
          {isVegetarian && <Badge>Vegetarian</Badge>}
          {isGlutenFree && <Badge>Glutenfree</Badge>}
          {isLactoseFree && <Badge>Lactosefree</Badge>}
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
};
