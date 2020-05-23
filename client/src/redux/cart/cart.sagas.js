import {all, call, takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import {clearCart} from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* clearCartOnCheckout() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onCheckoutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnCheckout);
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}
