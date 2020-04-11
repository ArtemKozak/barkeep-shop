import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import MobileMenuFixedButton from "../mobile-sidebar/mobile-sidebar.component";


import {
    HeaderContainer,
    LogoContainer,
} from './mobile-menu.styles';

const MobileHeader = () => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <p>Barkeep Shop</p>
        </LogoContainer>
        <MobileMenuFixedButton/>
        <CartIcon/>
    </HeaderContainer>
);

export default MobileHeader;
