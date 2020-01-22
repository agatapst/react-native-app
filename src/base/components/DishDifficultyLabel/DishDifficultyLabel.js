import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import Styles from './Styles';

const { row, additionalInfo, icon } = Styles;

export default function DishDifficultyLabel({ difficulty }) {
  const [levelImage, setLevelImage] = useState(null);
  const [levelText, setLevelText] = useState('');

  const levelEasyImg = require('../../../assets/images/levelEasy.png');
  const levelMediumImg = require('../../../assets/images/levelMedium.png');
  const levelChefImg = require('../../../assets/images/levelChef.png');

  useEffect(() => {
    if (difficulty === 1) {
      setLevelImage(levelEasyImg);
      setLevelText('EASY');
    } else if (difficulty === 2) {
      setLevelImage(levelMediumImg);
      setLevelText('MEDIUM');
    } else {
      setLevelImage(levelChefImg);
      setLevelText('CHEF');
    }
  }, [difficulty]);

  return (
    <View style={row}>
      <Image source={levelImage} style={icon} />
      <Text style={additionalInfo}>{levelText}</Text>
    </View>
  );
}

DishDifficultyLabel.propTypes = {
  difficulty: PropTypes.number.isRequired,
};
