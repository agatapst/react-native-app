import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Styles from './Styles';

const { container, overlay } = Styles;

const Overlay = ({ children }) => (
  <View style={container}>
    <View style={overlay} />
    {children}
  </View>
);

Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Overlay.defaultProps = {
  children: null,
};

export default Overlay;
