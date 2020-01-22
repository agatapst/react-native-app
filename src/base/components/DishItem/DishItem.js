/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Badge from '../Badge';
import LocalImage from '../LocalImage';
import ApiImage from '../ApiImage';
import Styles from './Styles';
import AdditionalDishInfo from '../AdditionalDishInfo/AdditionalDishInfo';

export default function DishItem(props) {
  const {
    name,
    description,
    preparationTime,
    portions,
    difficulty,
    isVegan,
    isVegetarian,
    isGlutenFree,
    isLactoseFree,
    image,
    onPress,
  } = props;
  const {
    listElementHeader,
    listElementDescription,
    listBox,
    container,
    badges,
    img,
  } = Styles;

  return (
    <View style={container}>
      {image ? (
        <ApiImage fileName={image} style={img} />
      ) : (
        <LocalImage
          source={require('../../../assets/images/dish.jpeg')}
          style={img}
        />
      )}
      <View style={listBox}>
        <TouchableOpacity onPress={onPress}>
          <Text style={listElementHeader}>{name}</Text>
        </TouchableOpacity>
        <Text style={listElementDescription}>{description}</Text>
        <AdditionalDishInfo
          preparationTime={preparationTime}
          portions={portions}
          difficulty={difficulty}
        />
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
  difficulty: PropTypes.number.isRequired,
  isVegan: PropTypes.bool.isRequired,
  isVegetarian: PropTypes.bool.isRequired,
  isGlutenFree: PropTypes.bool.isRequired,
  isLactoseFree: PropTypes.bool.isRequired,
  image: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

DishItem.defaultProps = {
  image: null,
};
