import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import Styles from './Styles';

const { screenContainer } = Styles;

export default function ScreenContainer({ children, ...props }) {
  return (
    <SafeAreaView {...props} style={screenContainer}>
      {children}
    </SafeAreaView>
  );
}

ScreenContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ScreenContainer.defaultProps = {
  children: null,
};
