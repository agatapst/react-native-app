import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Styles from './Styles';

const { headerTitle } = Styles;

export default function HeaderTitle({ children, ...props }) {
  return (
    <Text {...props} style={headerTitle}>
      {children}
    </Text>
  );
}

HeaderTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
