import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';


import './mobile-menu-fixed-button.styles.scss';
import {OptionLink,} from "../header/header.styles";

const MobileMenuFixedButton = ({currentUser, hidden, signOutStart}) => (
    <div className='button-container'>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox"/>
                <span/>
                <span/>
                <span/>
                <ul id="menu">
                    {currentUser ? (
                        <li><a href="/profile">
                            <p>
                                <p>Здравствуйте,</p>
                                <p>{currentUser.displayName}</p>
                            </p>
                            <p id='userExit'>Выйти</p>
                        </a>
                        </li>
                    ) : (
                        <OptionLink to='/signin'>Войдите в личный кабинет</OptionLink>
                    )}
                    <li><a href="/">Домой</a></li>
                    <li><a href="/shop">Магазин</a></li>
                    <li><a href="/shop">О нас</a></li>
                </ul>
            </div>
        </nav>
        {hidden ? null : <CartDropdown/>}
    </div>
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
