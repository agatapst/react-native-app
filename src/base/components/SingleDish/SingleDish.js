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
  const { container, dishHeader, dishDescription, img } = Styles;

  return (
    <View style={container}>
      {singleDishDetails.image && (
        <Image
          source={{
            uri: `http://localhost:3000/dish-image/${singleDishDetails.image}`,
          }}
          style={img}
        />
      )}
      {!singleDishDetails.image && (
        <Image
          source={require('../../../assets/images/dish.jpeg')}
          style={img}
        />
      )}
      <View style={{ margin: 10 }}>
        <HeaderTitle>{singleDishDetails.name}</HeaderTitle>
        <AdditionalDishInfo
          preparationTime={singleDishDetails.preparationTime}
          portions={singleDishDetails.portions}
          difficulty={singleDishDetails.difficulty}
        />
        <Text style={dishHeader}>{singleDishDetails.description}</Text>
        <View style={dishDescription}>
          {singleDishDetails.instructions.map((instruction) => (
            <Text key={instruction}>{instruction}</Text>
          ))}
        </View>

        <Text style={dishHeader}>What you will need: </Text>
        <FlatList
          data={singleDishIngredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={dishDescription} key={index}>
              <Text>{item.name}</Text>
              <Text>
                {item.quantity} {item.quantityType}
              </Text>
            </View>
          )}
          {...props}
        />
      </View>
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
    image: PropTypes.string,
  }).isRequired,
  singleDishIngredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};
