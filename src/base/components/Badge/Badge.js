import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

const { badge, badgeText } = Styles;

export default function Badge({ children, ...props }) {
  return (
    <TouchableOpacity {...props} style={badge}>
      <Text style={badgeText}>{children}</Text>
    </TouchableOpacity>
  );
}

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Badge.defaultProps = {
  children: null,
};
