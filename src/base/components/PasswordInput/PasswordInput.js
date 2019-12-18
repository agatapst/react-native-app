/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import Styles from './Styles';

export default function PasswordInput(props) {
  const [isSecure, setIsSecure] = useState(true);

  const { autoCompleteType, isPassword, errorMessage, isError, value } = props;

  const { container, error, input } = Styles;

  const showPassword = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={container}>
      <TextInput
        value={value}
        autoCapitalize="none"
        autoCompleteType={autoCompleteType}
        autoCorrect={false}
        secureTextEntry={isPassword && isSecure}
        style={input}
        {...props}
      />

      {isPassword && isSecure ? (
        <TouchableOpacity
          onPress={showPassword}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="ios-eye-off" size={24} color="grey" />
        </TouchableOpacity>
      ) : isPassword ? (
        <TouchableOpacity
          onPress={showPassword}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Ionicons name="ios-eye" size={24} color="grey" />
        </TouchableOpacity>
      ) : null}
      {isError && <Text style={error}>{errorMessage}</Text>}
    </View>
  );
}

PasswordInput.propTypes = {
  autoCompleteType: PropTypes.string,
  errorMessage: PropTypes.string,
  isPassword: PropTypes.bool,
  isError: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

PasswordInput.defaultProps = {
  autoCompleteType: 'off',
  errorMessage: '',
  isError: false,
  isPassword: false,
};
