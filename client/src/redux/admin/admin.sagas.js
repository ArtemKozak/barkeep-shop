import {
    all,
    call, takeLatest, put
} from 'redux-saga/effects';

import AdminActionTypes from "./admin.types";
import {AdminGetUserSuccess, AdminGetUserFailure, AdminGetOrdersSuccess, AdminGetOrdersFailure} from "./admin.actions";
import {
    firestore,
    convertUsersSnapshotToMap,
    convertAdminUsersOrdersSnapshotToMap
} from '../../firebase/firebase.utils';


export function* adminAllGetUsers() {
    try {
        const usersRef = yield firestore.collection('users')
        const snapShot = yield usersRef.get();
        const usersMap = yield call(
            convertUsersSnapshotToMap,
            snapShot
        );
        yield put(AdminGetUserSuccess(usersMap))
    } catch (error) {
        yield put(AdminGetUserFailure(error))
    }
}

export function* AdminGetAllOrders() {
    try {
        const orders = yield firestore.collectionGroup('orders')
        const snapShot = yield orders.get();
        const ordersMap = yield call(
            convertAdminUsersOrdersSnapshotToMap,
            snapShot
        );
        yield put(AdminGetOrdersSuccess(ordersMap))
    } catch (error) {
        yield put(AdminGetOrdersFailure(error))
    }
}


export function* onAdminGetUser() {
    yield takeLatest(
        AdminActionTypes.ADMIN_GET_ALL_USERS_START,
        adminAllGetUsers
    );
}

export function* onAdminGetAllOrders() {
    yield takeLatest(
        AdminActionTypes.ADMIN_GET_ALL_ORDERS_START,
        AdminGetAllOrders
    );
}


export function* adminSagas() {
    yield all([
        call(onAdminGetUser),
        call(onAdminGetAllOrders),
    ]);
}

