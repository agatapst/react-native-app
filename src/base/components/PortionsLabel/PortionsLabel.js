/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import LocalImage from '../LocalImage';
import Styles from './Styles';

const { row, icon, additionalInfo } = Styles;

export default function PortionsLabel({ portions }) {
  return (
    <View style={row}>
      <LocalImage
        source={require('../../../assets/images/portions.png')}
        style={icon}
      />
      <Text style={additionalInfo}>{portions} PORTIONS</Text>
    </View>
  );
}

PortionsLabel.propTypes = {
  portions: PropTypes.number.isRequired,
};
