import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import ConversationsList from '../components/ConversationsList';
import { getConversations as getConversationsAction } from '../../modules/conversations/redux/actions';

export const ConversationsScreen = ({
  getConversations: { isFetching, data },
  dispatch,
}) => {
  useEffect(() => {
    dispatch(getConversationsAction());
  }, []);

  return (
    <SafeAreaView>
      <Text>MY CONVERSATIONS:</Text>
      {isFetching && <Spinner />}
      {data && <ConversationsList conversations={data} />}
    </SafeAreaView>
  );
};

ConversationsScreen.propTypes = {
  getConversations: PropTypes.shape({
    data: PropTypes.array,
    error: PropTypes.object,
    isFetching: PropTypes.bool,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ conversations }) => conversations;

export default connect(mapStateToProps)(ConversationsScreen);
