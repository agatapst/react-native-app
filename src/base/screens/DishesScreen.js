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

export const DishesScreen = ({ getDishes: { isFetching, data }, dispatch }) => {
  useEffect(() => {
    dispatch(getDishesAction());
  }, []);

  const [filteredDishesList, setFilteredDishesList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const filterQuery = query || '';
    if (data) {
      const filteredDishes = data.data.filter((dish) =>
        dish.name.toLowerCase().includes(filterQuery.toLowerCase()),
      );
      setFilteredDishesList(filteredDishes);
    }
  }, [data, query]);

  return (
    <ScrollView>
      <ScreenContainer>
        <View>
          <SearchBar
            value={query}
            onChangeText={(text) => setQuery(text)}
            placeholder="Search for a recipe"
          />
          <View style={{ backgroundColor: '#FAF6F5', padding: 16 }}>
            <HeaderTitle>Choose a recipe:</HeaderTitle>
            {isFetching && <Spinner />}
            {filteredDishesList && <DishesList dishes={filteredDishesList} />}
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
    }),
    error: PropTypes.object,
    isFetching: PropTypes.bool,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dishes }) => dishes;

export default connect(mapStateToProps)(DishesScreen);
