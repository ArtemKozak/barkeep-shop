import React from 'react';
import {Route, Switch} from "react-router-dom";

import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component";
import PersonalInformationContainerPage
    from "../../components/profile-personal-information/profile-personal-information.container";

import {HorizontalLine, ProfilePageContainer} from './profile.styles';
import Loyalty from "../../components/profile-loyalty/profile-loyalty.component";


const ProfilePage = () => (
    <ProfilePageContainer>
        <ProfileNavigation/>
        <HorizontalLine/>
        <Switch>
            <Route exact path='/profile/personal-information/' component={PersonalInformationContainerPage}/>
            <Route path='/profile/loyalty' component={Loyalty}/>
        </Switch>
        <HorizontalLine/>
    </ProfilePageContainer>
);

export default ProfilePage;