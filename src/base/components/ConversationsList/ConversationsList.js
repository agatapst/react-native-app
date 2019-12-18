import React from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from './Styles';

export default function ConversationsList(props) {
  const { conversations } = props;
  const { list, listElement, listBox } = Styles;

  return (
    <FlatList
      style={list}
      data={conversations}
      renderItem={({ item }) => (
        <View style={listBox}>
          <Ionicons name="ios-mail" size={24} color="grey" />
          <Text style={listElement}>{item.name}</Text>
        </View>
      )}
    />
  );
}

ConversationsList.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
