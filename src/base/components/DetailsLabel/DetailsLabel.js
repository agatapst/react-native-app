/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import LocalImage from '../LocalImage';
import Styles from './Styles';

const { row, icon, additionalInfo } = Styles;

export default function DetailsLabel({ type, preparationTime, portions }) {
  return (
    <View>
      {type === 'preparationTime' && (
        <View style={row}>
          <LocalImage
            source={require('../../../assets/images/time.png')}
            style={icon}
          />
          <Text style={additionalInfo}>{preparationTime} MIN.</Text>
        </View>
      )}
      {type === 'portions' && (
        <View style={row}>
          <LocalImage
            source={require('../../../assets/images/portions.png')}
            style={icon}
          />
          <Text style={additionalInfo}>{portions} PORTIONS</Text>
        </View>
      )}
    </View>
  );
}

DetailsLabel.propTypes = {
  type: PropTypes.string.isRequired,
  preparationTime: PropTypes.number,
  portions: PropTypes.number,
};

DetailsLabel.defaultProps = {
  preparationTime: null,
  portions: null,
};
