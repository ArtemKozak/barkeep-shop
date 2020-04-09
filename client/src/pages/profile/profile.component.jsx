import React from 'react';

import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component";
import PersonalInformation from "../../components/profile-personal-information/profile-personal-information.component";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
    HorizontalLine,
    ProfilePageContainer,
    PersonalInformationContainer
} from './profile.styles';

const PersonalInformationWithSpinner = WithSpinner(PersonalInformation);

const ProfilePage = ({currentUser}) => (
    <ProfilePageContainer>
        <ProfileNavigation/>
        <HorizontalLine/>
        <PersonalInformationContainer>
            <PersonalInformationWithSpinner isLoading={!currentUser} currentUser={currentUser}/>
        </PersonalInformationContainer>
        <HorizontalLine/>
    </ProfilePageContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(
    mapStateToProps,
    null
)(ProfilePage);