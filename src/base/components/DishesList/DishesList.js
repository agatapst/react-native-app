import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Animated, FlatList, Text } from 'react-native';
import Styles from './Styles';
import * as HeaderTitleStyles from '../HeaderTitle/Styles';
import DishItem from '../DishItem/DishItem';

const maxHeaderFontSize = 38;
const minHeaderFontSize = 20;

export default function DishesList({ dishes, onPress, onEndReached }) {
  const { list } = Styles;
  const { default: { headerTitle } } = HeaderTitleStyles;

  const [scrollOffset] = useState(new Animated.Value(0));

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const onScroll = useCallback(({
    nativeEvent: {
      contentOffset: { y },
    },
  }) => {
    const scrollSensitivity = 0.5;
    const offset = y / scrollSensitivity;
    scrollOffset.setValue(offset);
  }, [scrollOffset]);

  return (
    <FlatList
      style={list}
      data={dishes}
      scrollToOverflowEnabled
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.01}
      initialNumToRender={0}
      maxToRenderPerBatch={1}
      ListHeaderComponent={() => (
        <Animated.Text
          style={{
            ...headerTitle,
            fontSize: scrollOffset.interpolate({
              inputRange: [0, 200],
              outputRange: [maxHeaderFontSize, minHeaderFontSize],
              extrapolate: 'clamp',
            }),
          }}
        >
          Choose a recipe:
        </Animated.Text>
      )}
      ListEmptyComponent={() => (<Text>No dishes matching criteria</Text>)}
      onScroll={onScroll}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <DishItem
          name={item.name}
          description={item.description}
          preparationTime={item.preparationTime}
          portions={item.portions}
          isVegan={item.isVegan}
          isVegetarian={item.isVegetarian}
          isGlutenFree={item.isGlutenFree}
          isLactoseFree={item.isLactoseFree}
          image={item.image}
          onPress={() => onPress(item.id)}
        />
      )}
    />
  );
}

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPress: PropTypes.func.isRequired,
  onEndReached: PropTypes.func.isRequired,
};
