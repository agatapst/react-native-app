import { API_URL } from 'react-native-dotenv';
import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export default function ApiImage({ fileName, ...props }) {
  return (
    <Image
      source={{
        uri: `${API_URL}/dish-image/${fileName}`,
      }}
      {...props}
    />
  );
}

ApiImage.propTypes = {
  fileName: PropTypes.string.isRequired,
};
