/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import Styles from './Styles';

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
      <View style={row}>
        {difficulty === 1 && (
          <View style={row}>
            <Image
              source={require('../../../assets/images/levelEasy.png')}
              style={icon}
            />
            <Text style={additionalInfo}>easy LEVEL</Text>
          </View>
        )}
        {difficulty === 2 && (
          <View style={row}>
            <Image
              source={require('../../../assets/images/levelMedium.png')}
              style={icon}
            />
            <Text style={additionalInfo}>medium LEVEL</Text>
          </View>
        )}
        {difficulty === 3 && (
          <View style={row}>
            <Image
              source={require('../../../assets/images/levelChef.png')}
              style={icon}
            />
            <Text style={additionalInfo}>CHEF LEVEL</Text>
          </View>
        )}
      </View>
    </View>
  );
}

AdditionalDishInfo.propTypes = {
  preparationTime: PropTypes.number.isRequired,
  portions: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
};
