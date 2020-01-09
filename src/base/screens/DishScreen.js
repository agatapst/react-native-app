import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import ActionButton from '../components/ActionButton';

const DishScreen = ({ ...props }) => {
  const {
    navigation: { navigate },
  } = props;
  return (
    <SafeAreaView>
      <View>
        <ActionButton
          isLink
          text="Log out"
          onPress={() => navigate('SignIn')}
        />
        <Text>GET STARTED</Text>
      </View>
    </SafeAreaView>
  );
};

DishScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default DishScreen;
