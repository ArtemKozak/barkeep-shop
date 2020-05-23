import React from "react";
import WithSpinner from "../with-spinner/with-spinner.component";
import CheckoutDataBlock from "./checkout-data.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";

import {CheckoutDataContainer} from "./checkout-data.styles";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";

const CheckoutDataBlockWithSpinner = WithSpinner(CheckoutDataBlock);

const CheckoutDataBlockContainerPage = ({currentUser, cartItems, total}) => (
    <CheckoutDataContainer>
        <CheckoutDataBlockWithSpinner isLoading={!currentUser} currentUser={currentUser} cartItems={cartItems} total={total}/>
    </CheckoutDataContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser
});

export default connect(
    mapStateToProps,
    null
)(CheckoutDataBlockContainerPage);