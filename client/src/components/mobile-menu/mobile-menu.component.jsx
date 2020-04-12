import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import SidebarIcon from '../mobile-sidebar-icon/mobile-sidebar-icon.component';

import {selectCartHidden} from "../../redux/cart/cart.selectors";

import {
    HeaderContainer,
    LogoContainer,
} from './mobile-menu.styles';


const MobileHeader = ({hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <p>Barkeep Shop</p>
        </LogoContainer>
        <SidebarIcon/>
        <CartIcon/>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
});

export default connect(
    mapStateToProps,
    null
)(MobileHeader);
