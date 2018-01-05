/*
 *
 * Auth actions
 *
 */
import steemconnect from 'containers/helpers/steemconnect';

import {
  CHECK_AUTH_START,
  CHECK_AUTH_ERROR,
  CHECK_AUTH_SUCCESS,

  GET_LOGIN_URL,
} from './constants';

export function checkAuthStart() {
  return {
    type: CHECK_AUTH_START,
  };
}

export function checkAuthError(error) {
  return {
    type: CHECK_AUTH_ERROR,
    error,
  };
}

export function checkAuthSuccess(userData) {
  return {
    type: CHECK_AUTH_SUCCESS,
    userData,
  };
}

export function getLoginURL() {
  const loginURL = steemconnect.getLoginURL();
  return {
    type: GET_LOGIN_URL,
    loginURL,
  };
}
