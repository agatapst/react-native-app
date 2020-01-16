/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, Image } from 'react-native';
import Styles from './Styles';
import HeaderTitle from '../HeaderTitle';
import AdditionalDishInfo from '../AdditionalDishInfo';
import Badge from '../Badge';

export default function SingleDish({
  singleDishDetails,
  singleDishIngredients,
  ...props
}) {
  const {
    container,
    dishHeader,
    dishDescription,
    img,
    mainInfo,
    badges,
  } = Styles;

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
      <View style={mainInfo}>
        <HeaderTitle>{singleDishDetails.name}</HeaderTitle>
        <AdditionalDishInfo
          preparationTime={singleDishDetails.preparationTime}
          portions={singleDishDetails.portions}
          difficulty={singleDishDetails.difficulty}
        />
        <View style={badges}>
          {singleDishDetails.isVegan && <Badge>Vegan</Badge>}
          {singleDishDetails.isVegetarian && <Badge>Vegetarian</Badge>}
          {singleDishDetails.isGlutenFree && <Badge>Glutenfree</Badge>}
          {singleDishDetails.isLactoseFree && <Badge>Lactosefree</Badge>}
        </View>
        <Text style={dishHeader}>{singleDishDetails.description}</Text>
        <View style={dishDescription}>
          {singleDishDetails.instructions.map((instruction, id) => (
            <Text key={id}>{instruction}</Text>
          ))}
        </View>

        <Text style={dishHeader}>What you will need: </Text>
        <FlatList
          data={singleDishIngredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={dishDescription} key={item.id}>
              <Text>{item.name}</Text>
              <Text>
                {item.quantity}
                {item.quantityType}
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
    isVegan: PropTypes.bool.isRequired,
    isVegetarian: PropTypes.bool.isRequired,
    isGlutenFree: PropTypes.bool.isRequired,
    isLactoseFree: PropTypes.bool.isRequired,
  }).isRequired,
  singleDishIngredients: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
