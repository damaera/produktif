/*
 *
 * Users actions
 *
 */

import {
  GET_USER_START,
  GET_USER_ERROR,
  GET_USER_SUCCESS,

  SET_CURRENT_USER,
} from './constants';

export function setCurrentUser(currentUser) {
  return {
    type: SET_CURRENT_USER,
    currentUser,
  };
}

export function getUserStart() {
  return {
    type: GET_USER_START,
  };
}
export function getUserError(error) {
  return {
    type: GET_USER_ERROR,
    error,
  };
}
export function getUserSuccess(userData) {
  return {
    type: GET_USER_SUCCESS,
    userData,
  };
}
