import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from './Styles';
import Colors from '../../constants/Colors';

const NoItemsMessage = ({ text }) => (
  <View style={Styles.container}>
    <MaterialCommunityIcons name="food-off" size={96} color={Colors.gray} />
    <Text style={Styles.text}>
      {text}
    </Text>
  </View>
);

NoItemsMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoItemsMessage;
