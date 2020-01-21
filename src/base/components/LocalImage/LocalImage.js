import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export default function LocalImage({ source, ...props }) {
  return <Image source={source} {...props} />;
}

LocalImage.propTypes = {
  source: PropTypes.number.isRequired,
};
