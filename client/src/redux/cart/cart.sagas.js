import { takeLatest, put, all, call } from 'redux-saga/effects';

import { clearCart } from './cart.actions';
import { SIGN_OUT_SUCCESS } from '../user/user.types';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
