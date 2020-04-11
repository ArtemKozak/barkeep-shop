import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';


import {OptionLink, MenuButtonContainer, Nav, MenuToggle, MenuToggleSpan, CheckoutInput, MenuItem, ListItem} from "./mobile-menu-fixed-button.styles";

const MobileMenuFixedButton = ({currentUser, hidden, signOutStart}) => (
    <MenuButtonContainer className='button-container'>
        <Nav role="navigation">
            <MenuToggle id="menuToggle">
                <CheckoutInput type="checkbox"/>
                <MenuToggleSpan/>
                <MenuToggleSpan/>
                <MenuToggleSpan/>
                <MenuItem id='menu'>
                    {currentUser ? (
                        <ListItem>
                            <OptionLink to="/profile">
                                <p>Здравствуйте,</p>
                                <p>{currentUser.displayName}</p>
                        </OptionLink>
                        </ListItem>
                    ) : (
                        <OptionLink to='/signin'>Войдите в личный кабинет</OptionLink>
                    )}
                    <ListItem><OptionLink to="/">Домой</OptionLink></ListItem>
                    <ListItem><OptionLink to="/shop">Магазин</OptionLink></ListItem>
                    <ListItem><OptionLink to="/shop">О нас</OptionLink></ListItem>
                    {currentUser ? (<ListItem><OptionLink className='userExit'>Выйти</OptionLink></ListItem>) : null}
                </MenuItem>
            </MenuToggle>
        </Nav>
        {hidden ? null : <CartDropdown/>}
    </MenuButtonContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileMenuFixedButton);
