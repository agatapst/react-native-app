import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Styles from './Styles';

const { badge, badgeText, badgeActive } = Styles;

const CheckboxBadge = ({ children, isDisabled, onChange, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  const onPress = useCallback(() => {
    if (!isDisabled) {
      if (onChange) {
        onChange(!isActive);
      }
      setIsActive(!isActive);
    }
  }, [isActive, setIsActive]);

  return (
    <TouchableWithoutFeedback {...props} onPress={onPress}>
      <View style={isActive ? badgeActive : badge}>
        <Text style={badgeText}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

CheckboxBadge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxBadge.defaultProps = {
  isDisabled: false,
  onChange: undefined,
};

export default CheckboxBadge;
