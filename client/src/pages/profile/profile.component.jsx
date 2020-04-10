import React from 'react';
import {Route, Switch} from "react-router-dom";

import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component";
import PersonalInformationContainerPage
    from "../../components/profile-personal-information/profile-personal-information.container";
import LoyaltyContainerPage from "../../components/profile-loyalty/profile-loyalty.container";

import {HorizontalLine, ProfilePageContainer} from './profile.styles';


const ProfilePage = () => (
    <ProfilePageContainer>
        <ProfileNavigation/>
        <HorizontalLine/>
        <Switch>
            <Route exact path='/profile/personal-information/' component={PersonalInformationContainerPage}/>
            <Route path='/profile/loyalty' component={LoyaltyContainerPage}/>
        </Switch>
        <HorizontalLine/>
    </ProfilePageContainer>
);

export default ProfilePage;