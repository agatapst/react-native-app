/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import Styles from './Styles';
import DishDifficultyLabel from '../DishDifficultyLabel';

const { row, iconsRow, additionalInfo, icon } = Styles;

export default function AdditionalDishInfo({ ...props }) {
  const { preparationTime, portions, difficulty } = props;

  return (
    <View style={[row, iconsRow]}>
      <View style={row}>
        <Image
          source={require('../../../assets/images/time.png')}
          style={icon}
        />
        <Text style={additionalInfo}>{preparationTime} MIN.</Text>
      </View>
      <View style={row}>
        <Image
          source={require('../../../assets/images/portions.png')}
          style={icon}
        />
        <Text style={additionalInfo}>{portions} PORTIONS</Text>
      </View>
      <DishDifficultyLabel difficulty={difficulty} />
    </View>
  );
}

AdditionalDishInfo.propTypes = {
  preparationTime: PropTypes.number.isRequired,
  portions: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
};
