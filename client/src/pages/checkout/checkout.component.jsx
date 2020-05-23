import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {createStructuredSelector} from 'reselect';

import {
    CheckoutPageContainer,
    CheckoutBlock,
} from './checkout.styles';

import {
    selectCartItems,
} from '../../redux/cart/cart.selectors';

import CheckoutDataBlockContainerPage from "../../components/checkout-data/checkout-data.container";
import {TitleOfArticle} from "../terms-of-use/terms-of-use.styles";


const CheckoutPage = ({cartItems, total, currentUser}) => {
    return (
        <CheckoutPageContainer>
            {
                cartItems.length === 0 ? (
                    <Redirect to='/cart'/>
                ) : (
                    <CheckoutBlock>
                        <TitleOfArticle>Оформление заказа</TitleOfArticle>
                        <CheckoutDataBlockContainerPage/>

                    </CheckoutBlock>
                )
            }

        </CheckoutPageContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
