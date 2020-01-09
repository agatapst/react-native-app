import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import Styles from './Styles';

const { container, input } = Styles;

export default function SearchBar(props) {
  return (
    <View style={container}>
      <Ionicons name="ios-search" size={24} color="grey" />
      <TextInput
        blurOnSubmit={false}
        autoCapitalize="none"
        style={input}
        {...props}
      />
    </View>
  );
}

SearchBar.propTypes = {
  autoCompleteType: PropTypes.string,
  errorMessage: PropTypes.string,
  isPassword: PropTypes.bool,
  isError: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

SearchBar.defaultProps = {
  autoCompleteType: 'off',
  errorMessage: '',
  isError: false,
  isPassword: false,
};
