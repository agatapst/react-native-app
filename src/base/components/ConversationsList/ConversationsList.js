import React from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList } from 'react-native';

export default function ConversationsList(props) {
  const { conversations } = props;

  return (
    <FlatList
      data={conversations}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}

ConversationsList.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
