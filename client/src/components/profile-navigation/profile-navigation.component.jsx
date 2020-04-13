import React from "react";

import {NavigationContainer, NavigationProfileLink} from './profile-navigation.styles';
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const ProfileNavigation = ({toggleCartHidden}) => (
    <NavigationContainer>
        <NavigationProfileLink to='/profile/personal-information/'>Главная</NavigationProfileLink>
        <NavigationProfileLink to='/profile/loyalty/'>Бонусные баллы</NavigationProfileLink>
        <NavigationProfileLink as='div' onClick={toggleCartHidden}>Корзина</NavigationProfileLink>
        <NavigationProfileLink to='/profile/current-orders/'>Текущие заказы</NavigationProfileLink>
        <NavigationProfileLink to='/profile/orders-history/'>Не открывай это</NavigationProfileLink>
    </NavigationContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    null,
    mapDispatchToProps
)(ProfileNavigation);