import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import ConversationsList from '../components/ConversationsList';
import HeaderTitle from '../components/HeaderTitle';
import ScreenContainer from '../components/ScreenContainer';
import { getConversations as getConversationsAction } from '../../modules/conversations/redux/actions';

export const ConversationsScreen = ({
  getConversations: { isFetching, data },
  dispatch,
}) => {
  useEffect(() => {
    dispatch(getConversationsAction());
  }, []);

  return (
    <ScreenContainer>
      <HeaderTitle>My Conversations:</HeaderTitle>
      {isFetching && <Spinner />}
      {data && <ConversationsList conversations={data} />}
    </ScreenContainer>
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
