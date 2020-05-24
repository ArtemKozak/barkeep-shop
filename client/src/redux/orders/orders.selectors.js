import {createSelector} from 'reselect';

const selectOrders = state => state.orders;

export const selectUserOrders = createSelector(
    [selectOrders],
    orders => orders.userOrders
);

export const selectUserOrdersForPreview = createSelector(
    [selectUserOrders],
    userOrders => userOrders ? Object.keys(userOrders).map(key => userOrders[key]) : []
);

export const selectUserOrder = userOrderUrlParam => createSelector(
    [selectOrders],
    userOrders => (userOrders ? userOrders[userOrderUrlParam] : null)
);

export const selectIsUserOrderFetching = createSelector(
    [selectOrders],
    orders => orders.isFetching
);

export const selectIsUserOrdersLoaded = createSelector(
    [selectOrders],
    orders => !!orders.userOrders
);
