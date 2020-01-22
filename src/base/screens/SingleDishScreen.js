import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import SingleDish from '../components/SingleDish';
import { getSingleDish as getSingleDishAction } from '../../modules/dishes/redux/actions';

export const SingleDishScreen = ({
  getSingleDish: { data, isFetching },
  navigation: { getParam: getNavigationParam },
  dispatch,
}) => {
  useEffect(() => {
    const dishId = getNavigationParam('id', 'NO-ID').split('_')[0];
    dispatch(getSingleDishAction(dishId));
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        {isFetching && <Spinner />}
        {!isFetching && data && (
          <SingleDish
            singleDishDetails={data.dish}
            singleDishIngredients={data.ingredients}
          />
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

SingleDishScreen.propTypes = {
  getSingleDish: PropTypes.shape({
    data: PropTypes.shape({
      ingredients: PropTypes.array,
      dish: PropTypes.object,
    }),
    error: PropTypes.object,
    isFetching: PropTypes.bool,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dishes }) => dishes;

export default connect(mapStateToProps)(SingleDishScreen);
