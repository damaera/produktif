/*
 *
 * Users reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USER_START,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  SET_CURRENT_USER,
} from './constants';

const initialState = fromJS({
  currentUser: '',
  lists: {},
  loading: false,
});

function usersReducer(state = initialState, action) {
  switch (action.type) {

    case GET_USER_START:
      return state.merge({
        loading: true,
      });
    case GET_USER_ERROR:
      return state.merge({
        loading: false,
        error: action.error,
      });
    case GET_USER_SUCCESS:
      return state
        .set('loading', false)
        .setIn(['lists', action.userData.name], action.userData);

    case SET_CURRENT_USER:
      return state.merge({
        currentUser: action.currentUser,
      });
    default:
      return state;
  }
}

export default usersReducer;
