import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import { ScrollView, View } from 'react-native';
import DishesList from '../components/DishesList';
import HeaderTitle from '../components/HeaderTitle';
import Input from '../components/Input';
import ScreenContainer from '../components/ScreenContainer';
import { getDishes as getDishesAction } from '../../modules/dishes/redux/actions';

export const DishesScreen = ({ getDishes: { isFetching, data }, dispatch }) => {
  useEffect(() => {
    dispatch(getDishesAction());
  }, []);

  return (
    <ScrollView>
      <ScreenContainer>
        <View>
          <Input />
          <View style={{ backgroundColor: 'pink', padding: 16 }}>
            <HeaderTitle>Dishes:</HeaderTitle>
            {isFetching && <Spinner />}
            {data && <DishesList dishes={data} />}
          </View>
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};

DishesScreen.propTypes = {
  getDishes: PropTypes.shape({
    data: PropTypes.array,
    error: PropTypes.object,
    isFetching: PropTypes.bool,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dishes }) => dishes;

export default connect(mapStateToProps)(DishesScreen);
