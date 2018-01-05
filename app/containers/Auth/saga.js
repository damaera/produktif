import { call, put, takeLatest } from 'redux-saga/effects';
import { CHECK_AUTH_START } from 'containers/Auth/constants';
import { checkAuthError, checkAuthSuccess } from 'containers/Auth/actions';

import steemconnect from 'containers/helpers/steemconnect';

function steemConnectAuth() {
  return new Promise((resolve, reject) => {
    steemconnect.isAuthenticated((err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

export function* checkAuth() {
  try {
    const res = yield call(steemConnectAuth);
    yield put(checkAuthSuccess(res));
  } catch (err) {
    yield put(checkAuthError(err));
  }
}

export default function* checkAuthData() {
  yield takeLatest(CHECK_AUTH_START, checkAuth);
}

