/* eslint-disable function-paren-newline */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import { View } from 'react-native';
import DishesList from '../../components/DishesList';
import ScreenContainer from '../../components/ScreenContainer';
import { getDishes as getDishesAction } from '../../../modules/dishes/redux/actions';
import SearchBar from '../../components/SearchBar';
import DishesFilterBar from '../../components/DishesFilterBar';
import Styles from './Styles';

const DISHES_PER_PAGE = 3;
const QUERY_MIN_LENGTH = 3;
const WAIT_BEFORE_REQUEST_CALL = 1000;

const DishesScreen = ({
  getDishes: { isFetching, data },
  navigation: { navigate },
  dispatch,
}) => {
  const { container, dishesContainer } = Styles;

  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [showFiltersBar, setShowFiltersBar] = useState(false);
  const callTimeoutRef = useRef(-1);
  const forceFetch = useRef(true);
  const loadMore = useRef(true);

  const fetchDishes = useCallback(() => {
    const apiCall = () => {
      if (!isFetching) {
        const queryParams = { page, perPage: DISHES_PER_PAGE, filters, loadMore: loadMore.current };

        if (query && query.length >= QUERY_MIN_LENGTH) {
          queryParams.query = query;
        }

        dispatch(getDishesAction(queryParams));
        loadMore.current = true;
      }
    };

    clearTimeout(callTimeoutRef.current);
    callTimeoutRef.current = setTimeout(apiCall, forceFetch.current ? 0 : WAIT_BEFORE_REQUEST_CALL);
  }, [page, query, filters]);

  useEffect(() => {
    fetchDishes();
    forceFetch.current = false;

    return () => {
      clearTimeout(callTimeoutRef.current);
    };
  }, [page, query, filters]);

  const onSearchChange = useCallback((text) => {
    loadMore.current = false;
    setQuery(text);
    setPage(0);
  }, [setPage, setQuery]);

  const onFiltersChange = useCallback((newFilters) => {
    loadMore.current = false;
    setFilters(newFilters);
    setPage(0);
  }, [setPage, setFilters]);

  const onEndReached = useCallback(() => {
    if (!isFetching && data.data.length >= DISHES_PER_PAGE && data.data.length < data.total) {
      forceFetch.current = true;
      setPage((prevPage) => prevPage + 1);
    }
  }, [setPage, data]);

  const onFilterButtonPress = useCallback(() => {
    setShowFiltersBar((prev) => !prev);
  }, [setShowFiltersBar]);

  return (
    <ScreenContainer>
      <View style={container}>
        <SearchBar
          value={query}
          onChangeText={onSearchChange}
          placeholder="Search for a recipe"
          onFilterButtonPress={onFilterButtonPress}
        />
        {showFiltersBar && (<DishesFilterBar onChange={onFiltersChange} />)}
        <View style={dishesContainer}>
          <DishesList
            dishes={data ? data.data : []}
            onEndReached={onEndReached}
            onPress={() => navigate('Home')}
          />
          {isFetching && <Spinner />}
        </View>
      </View>
    </ScreenContainer>
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
