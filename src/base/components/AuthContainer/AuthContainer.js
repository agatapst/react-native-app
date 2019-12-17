import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import Styles from './Styles';

const { authContainer } = Styles;

export default function AuthContainer({ children, ...props }) {
  return (
    <SafeAreaView {...props} style={authContainer}>
      {children}
    </SafeAreaView>
  );
}

AuthContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AuthContainer.defaultProps = {
  children: null,
};
