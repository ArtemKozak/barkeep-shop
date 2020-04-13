import React from "react";
import WithSpinner from "../with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";

import CurrentOrders from "./profile-current-orders.component";
import {ProfileDataContainer} from "../../pages/profile/profile.styles";

const CurrentOrdersWithSpinner = WithSpinner(CurrentOrders);

const CurrentOrdersContainerPage = ({currentUser}) => (
    <ProfileDataContainer>
        <CurrentOrdersWithSpinner isLoading={!currentUser} currentUser={currentUser}/>
    </ProfileDataContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(
    mapStateToProps,
    null
)(CurrentOrdersContainerPage);