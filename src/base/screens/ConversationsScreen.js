import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import ConversationsList from '../components/ConversationsList';

const ConversationsScreen = () => (
  <SafeAreaView>
    <Text>MY CONVERSATIONS:</Text>
    <ConversationsList
      conversations={[
        { id: 1, name: 'abc' },
        { id: 2, name: 'def' },
      ]}
    />
  </SafeAreaView>
);

export default ConversationsScreen;
