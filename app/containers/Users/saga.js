// import axios from 'axios';
import steem from 'steem';

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_USER_START } from './constants';
import { getUserError, getUserSuccess } from './actions';

import { makeSelectCurrentUser } from './selectors';

function apiCurrentUser(currentUser) {
  return new Promise((resolve, reject) => {
    steem.api.getAccounts([currentUser], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

export function* getUser() {
  try {
    const currentUser = yield select(makeSelectCurrentUser());
    const user = yield call(apiCurrentUser, currentUser);
    yield put(getUserSuccess(user[0]));
  } catch (err) {
    yield put(getUserError(err));
  }
}

export default function* userData() {
  yield takeLatest(GET_USER_START, getUser);
}
