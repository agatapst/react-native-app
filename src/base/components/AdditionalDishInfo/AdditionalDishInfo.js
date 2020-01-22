/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Styles from './Styles';
import DishDifficultyLabel from '../DishDifficultyLabel';
import DetailsLabel from '../DetailsLabel';

const { row, iconsRow } = Styles;

export default function AdditionalDishInfo({
  preparationTime,
  portions,
  difficulty,
}) {
  return (
    <View style={[row, iconsRow]}>
      <DetailsLabel type="preparationTime" preparationTime={preparationTime} />
      <DetailsLabel type="portions" portions={portions} />
      <DishDifficultyLabel difficulty={difficulty} />
    </View>
  );
}

AdditionalDishInfo.propTypes = {
  preparationTime: PropTypes.number.isRequired,
  portions: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
};
