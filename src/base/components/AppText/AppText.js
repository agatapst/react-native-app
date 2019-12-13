import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Styles from './Styles';

const { appText } = Styles;

export default function AppText({ children, ...props }) {
  return (
    <Text {...props} style={appText}>
      {children}
    </Text>
  );
}

AppText.propTypes = {
  children: PropTypes.string.isRequired,
};
