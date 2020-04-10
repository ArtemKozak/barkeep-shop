import {PersonalInformationContainer} from "../../pages/profile/profile.styles";
import React from "react";
import WithSpinner from "../with-spinner/with-spinner.component";
import PersonalInformation from "./profile-personal-information.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";

const PersonalInformationWithSpinner = WithSpinner(PersonalInformation);

const PersonalInformationContainerPage = ({currentUser}) => (
    <PersonalInformationContainer>
        <PersonalInformationWithSpinner isLoading={!currentUser} currentUser={currentUser}/>
    </PersonalInformationContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(
    mapStateToProps,
    null
)(PersonalInformationContainerPage);