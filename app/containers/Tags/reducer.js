/*
 *
 * Tags reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_TRENDING_TAGS_START,
  GET_TRENDING_TAGS_ERROR,
  GET_TRENDING_TAGS_SUCCESS,
} from './constants';

const initialState = fromJS({
  trendingTags: [],
  loading: false,
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRENDING_TAGS_START:
      return state.merge({
        loading: true,
      });
    case GET_TRENDING_TAGS_ERROR:
      return state.merge({
        loading: false,
      });
    case GET_TRENDING_TAGS_SUCCESS:
      return state.merge({
        trendingTags: action.trendingTags,
        loading: false,
      });
    default:
      return state;
  }
}

export default headerReducer;
