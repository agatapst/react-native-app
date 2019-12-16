import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import Styles from './Styles';

const { screenContainer } = Styles;

export default function AuthContainer({ children, ...props }) {
  return (
    <SafeAreaView {...props} style={screenContainer}>
      {children}
    </SafeAreaView>
  );
}

AuthContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};
