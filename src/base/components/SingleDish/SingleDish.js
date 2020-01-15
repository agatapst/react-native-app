/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, Image } from 'react-native';
import Styles from './Styles';
import HeaderTitle from '../HeaderTitle';
import AdditionalDishInfo from '../AdditionalDishInfo';

export default function SingleDish({
  singleDishDetails,
  singleDishIngredients,
  ...props
}) {
  const { container, dishHeader, dishDescription } = Styles;

  return (
    <View style={container}>
      <Image
        source={{
          uri: `http://localhost:3000/dish-image/${singleDishDetails.image}`,
        }}
        style={{ width: 500, height: 200 }}
      />
      <HeaderTitle>{singleDishDetails.name}</HeaderTitle>
      <AdditionalDishInfo
        preparationTime={singleDishDetails.preparationTime}
        portions={singleDishDetails.portions}
        difficulty={singleDishDetails.difficulty}
      />
      <Text style={dishHeader}>{singleDishDetails.description}</Text>
      <View style={dishDescription}>
        {singleDishDetails.instructions.map((instruction) => (
          <Text>{instruction}</Text>
        ))}
      </View>

      <Text style={dishHeader}>What you will need: </Text>
      <FlatList
        data={singleDishIngredients}
        renderItem={({ item }) => (
          <View style={dishDescription}>
            <Text>{item.name}</Text>
            <Text>
              {item.quantity} {item.quantityType}
            </Text>
          </View>
        )}
        {...props}
      />
    </View>
  );
}

SingleDish.propTypes = {
  singleDishDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    preparationTime: PropTypes.number.isRequired,
    portions: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  singleDishIngredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};
