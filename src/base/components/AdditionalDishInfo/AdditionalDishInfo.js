/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Styles from './Styles';
import DishDifficultyLabel from '../DishDifficultyLabel';
import PortionsLabel from '../PortionsLabel';
import PreparationTimeLabel from '../PreparationTimeLabel';

const { row, iconsRow } = Styles;

export default function AdditionalDishInfo({
  preparationTime,
  portions,
  difficulty,
}) {
  return (
    <View style={[row, iconsRow]}>
      <PreparationTimeLabel preparationTime={preparationTime} />
      <PortionsLabel portions={portions} />
      <DishDifficultyLabel difficulty={difficulty} />
    </View>
  );
}

AdditionalDishInfo.propTypes = {
  preparationTime: PropTypes.number.isRequired,
  portions: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
};
