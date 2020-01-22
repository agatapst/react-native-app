/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import LocalImage from '../LocalImage';
import Styles from './Styles';

const { row, icon, additionalInfo } = Styles;

export default function PreparationTimeLabel({ preparationTime }) {
  return (
    <View style={row}>
      <LocalImage
        source={require('../../../assets/images/time.png')}
        style={icon}
      />
      <Text style={additionalInfo}>{preparationTime} MIN.</Text>
    </View>
  );
}

PreparationTimeLabel.propTypes = {
  preparationTime: PropTypes.number.isRequired,
};
