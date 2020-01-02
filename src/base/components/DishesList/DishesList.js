import React from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, View, Image } from 'react-native';
import Styles from './Styles';

export default function DishesList(props) {
  const { dishes } = props;
  const { list, listElement, listBox } = Styles;

  return (
    <FlatList
      style={list}
      data={dishes.data}
      renderItem={({ item }) => (
        <View>
          <Image
            style={{ height: 150, width: 400 }}
            source={require('../../../assets/images/dish.jpeg')}
          />
          <View style={listBox}>
            <Text style={listElement}>{item.id}</Text>
            <Text style={listElement}>{item.name}</Text>
            <Text style={listElement}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  );
}

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
