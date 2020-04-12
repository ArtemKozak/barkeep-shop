import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';


import {
    CheckoutInput,
    FullScreenMenuContainer,
    ListItem,
    MenuButtonContainer,
    MenuItem,
    MenuToggle,
    MenuToggleSpan,
    Nav,
    OptionLink
} from "./mobile-sidebar.styles";
import {selectSidebarHidden} from "../../redux/sidebar/sidebar.selectors";
import {toggleSidebarHidden} from "../../redux/sidebar/sidebar.actions";

const MobileMenuFixedButton = ({currentUser, hidden, toggleSidebarHidden, signOutStart}) => (
    <MenuButtonContainer className='button-container'>
        <Nav role="navigation">
            <MenuToggle id="menuToggle">
                <CheckoutInput type="checkbox"/>
                <FullScreenMenuContainer onClick={toggleSidebarHidden}/>
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
                        <ListItem>
                            <OptionLink to='/signin'>
                                <p>Войдите</p>
                                <p>в личный кабинет</p>
                            </OptionLink>
                        </ListItem>
                    )}
                    <ListItem><OptionLink to="/">Домой</OptionLink></ListItem>
                    <ListItem><OptionLink to="/checkout">Корзина</OptionLink></ListItem>
                    <ListItem><OptionLink to="/shop">Магазин</OptionLink></ListItem>
                    <ListItem><OptionLink to="/shop">О нас</OptionLink></ListItem>
                    {currentUser ? (<ListItem><OptionLink className='userExit' as='div'
                                                          onClick={signOutStart}>Выйти</OptionLink></ListItem>) : null}
                </MenuItem>
            </MenuToggle>
        </Nav>
    </MenuButtonContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectSidebarHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
    toggleSidebarHidden: () => dispatch(toggleSidebarHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileMenuFixedButton);
