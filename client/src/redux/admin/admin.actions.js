import AdminActionTypes from "./admin.types";

export const AdminGetAllUsersSuccess = users => ({
    type: AdminActionTypes.ADMIN_GET_ALL_USERS_ORDERS_FAILURE,
    payload: users
});

export const AdminGetAllUsersFailure = error => ({
    type: AdminActionTypes.ADMIN_GET_ALL_USERS_ORDERS_SUCCESS,
    payload: error
});

export const AdminGetUserStart = () => ({
    type: AdminActionTypes.ADMIN_GET_ALL_USERS_START
});

export const AdminGetUserSuccess = usersMap => ({
    type: AdminActionTypes.ADMIN_GET_ALL_USERS_SUCCESS,
    payload: usersMap
});

export const AdminGetUserFailure = error => ({
    type: AdminActionTypes.ADMIN_GET_ALL_USERS_FAILURE,
    payload: error
});

export const AdminGetOrdersStart = () => ({
    type: AdminActionTypes.ADMIN_GET_ALL_ORDERS_START
})

export const AdminGetOrdersSuccess = orders => ({
    type: AdminActionTypes.ADMIN_GET_ALL_ORDERS_SUCCESS,
    payload: orders
});

export const AdminGetOrdersFailure = error => ({
    type: AdminActionTypes.ADMIN_GET_ALL_USERS_FAILURE,
    payload: error
});
