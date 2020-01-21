import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export default function ApiImage({ fileName, ...props }) {
  return (
    <Image
      source={{
        uri: `http://localhost:3000/dish-image/${fileName}`,
      }}
      {...props}
    />
  );
}

ApiImage.propTypes = {
  fileName: PropTypes.string.isRequired,
};
