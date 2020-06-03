import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearAllFromCart } from "./cart.actions";

export function* clearAllFromCartOnSignOut() {
  yield put(clearAllFromCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearAllFromCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
