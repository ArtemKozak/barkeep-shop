import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import MobileMenuFixedButton from "../mobile-sidebar/mobile-sidebar.component";

import {selectCartHidden, selectSuccessfulOrder} from "../../redux/cart/cart.selectors";

import {
    HeaderContainer,
    LogoContainer,
} from './mobile-header.styles';
import CheckoutSuccess from "../alert-container/alert-container.component";


const MobileHeader = ({hidden, successOrder}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <p>Barkeep Shop</p>
        </LogoContainer>
        <CartIcon/>
        <MobileMenuFixedButton/>
        {successOrder ? (<CheckoutSuccess/>) : null}
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    successOrder: selectSuccessfulOrder
});

export default connect(
    mapStateToProps,
    null
)(MobileHeader);
