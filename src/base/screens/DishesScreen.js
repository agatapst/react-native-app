/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import { ScrollView, View } from 'react-native';
import DishesList from '../components/DishesList';
import HeaderTitle from '../components/HeaderTitle';
import ScreenContainer from '../components/ScreenContainer';
import { getDishes as getDishesAction } from '../../modules/dishes/redux/actions';
import SearchBar from '../components/SearchBar';

const DISHES_PER_PAGE = 3;

export const DishesScreen = ({
  getDishes: { isFetching, data },
  dispatch,
  ...props
}) => {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const {
    navigation: { navigate },
  } = props;

  useEffect(() => {
    dispatch(getDishesAction({ page: 0, perPage: DISHES_PER_PAGE }));
  }, []);

  const searchDishes = () => {
    setPage(0);
    dispatch(getDishesAction({ page: 0, perPage: DISHES_PER_PAGE, query }));
  };

  const loadMoreDishes = () => {
    if (!isFetching && data.data.length < data.total) {
      const newPage = page + 1;
      setPage(newPage);
      dispatch(
        getDishesAction({
          page: newPage,
          perPage: DISHES_PER_PAGE,
          query,
          loadMore: true,
        }),
      );
    }
  };

  return (
    <ScrollView>
      <ScreenContainer>
        <View>
          <SearchBar
            value={query}
            onChangeText={(text) => setQuery(text)}
            onEndEditing={searchDishes}
            placeholder="Search for a recipe"
          />
          <View style={{ backgroundColor: '#FAF6F5', padding: 16 }}>
            <HeaderTitle>Choose a recipe:</HeaderTitle>
            {isFetching && !data && <Spinner />}
            {data && (
              <DishesList
                dishes={data.data}
                onEndReached={loadMoreDishes}
                onEndReachedThreshold={0.5}
                onPress={(dishId) => navigate('SingleDish', { id: dishId })}
              />
            )}
          </View>
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};

DishesScreen.propTypes = {
  getDishes: PropTypes.shape({
    data: PropTypes.shape({
      data: PropTypes.array,
      total: PropTypes.number,
    }),
    error: PropTypes.object,
    isFetching: PropTypes.bool,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dishes }) => dishes;

export default connect(mapStateToProps)(DishesScreen);
