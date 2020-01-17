import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Styles from './Styles';

const { container, input } = Styles;

const SearchBar = ({ onFilterButtonPress, ...props }) => (
  <View style={container}>
    <Ionicons name="ios-search" size={24} color="grey" />
    <TextInput
      blurOnSubmit={false}
      autoCapitalize="none"
      style={input}
      {...props}
    />
    <IconButton icon="filter" mode="contained" onPress={onFilterButtonPress} color="grey" />
  </View>
);

SearchBar.propTypes = {
  autoCompleteType: PropTypes.string,
  errorMessage: PropTypes.string,
  isPassword: PropTypes.bool,
  isError: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onFilterButtonPress: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  autoCompleteType: 'off',
  errorMessage: '',
  isError: false,
  isPassword: false,
};

export default SearchBar;
