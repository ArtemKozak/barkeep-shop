import React from 'react';

import {
    OrderItemContainer,
    OrderItemTitles,
    ItemTitle
} from './order-item.styles'
import {TotalContainer} from "../checkout-data/checkout-data.styles";

const OrderItem = ({cartItems, createdAt, orderStatus, total}) => (
    <OrderItemContainer>
        <OrderItemTitles>
            {cartItems.map(item =>
                <ItemTitle key={item.id}>
                    {item.name}
                </ItemTitle>
            )}
        </OrderItemTitles>
        <TotalContainer>Всего {total} грн</TotalContainer>
    </OrderItemContainer>
);

export default OrderItem;