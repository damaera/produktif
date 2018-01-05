/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_LOGIN_URL,
  CHECK_AUTH_START,
  CHECK_AUTH_ERROR,
  CHECK_AUTH_SUCCESS,
} from './constants';

const initialState = fromJS({
  userId: null,
  isAuthenticated: false,
  username: '',
  permissions: [],
  token: '',
  loading: false,
  loginURL: '',
  error: '',
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOGIN_URL:
      return state.merge({
        loginURL: action.loginURL,
      });
    case CHECK_AUTH_START:
      return state.merge({
        loading: true,
        error: '',
      });
    case CHECK_AUTH_ERROR:
      return state.merge({
        loading: false,
        error: action.error,
      });
    case CHECK_AUTH_SUCCESS:
      return state.merge({
        ...action.userData,
        error: '',
      });
    default:
      return state;
  }
}

export default authReducer;
