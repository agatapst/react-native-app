import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import ActionButton from '../components/ActionButton';
import IngredientsList from '../components/SingleDish';
import { getSingleDish as getSingleDishAction } from '../../modules/dishes/redux/actions';

export const SingleDishScreen = ({
  getSingleDish: { data, isFetching },
  dispatch,
  id,
  ...props
}) => {
  const {
    navigation: { navigate, getParam: getNavigationParam },
  } = props;

  useEffect(() => {
    dispatch(getSingleDishAction(getNavigationParam('id', 'NO-ID')));
  }, []);

  return (
    <SafeAreaView>
      <View>
        <ActionButton
          isLink
          text="Log out"
          onPress={() => navigate('SignIn')}
        />
        <Text>I AM DISH SCREEN</Text>
        {isFetching && <Spinner />}
        {!isFetching && data && (
          <IngredientsList dishIngredients={data.ingredients} />
        )}
      </View>
    </SafeAreaView>
  );
};

SingleDishScreen.propTypes = {
  getSingleDish: PropTypes.shape({
    data: PropTypes.shape({
      ingredients: PropTypes.array,
    }),
    error: PropTypes.object,
    isFetching: PropTypes.bool,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = ({ dishes }) => dishes;

export default connect(mapStateToProps)(SingleDishScreen);
