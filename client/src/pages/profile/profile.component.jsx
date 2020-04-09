import React from 'react';

import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component";
import PersonalInformation from "../../components/profile-personal-information/profile-personal-information.component";

import {HorizontalLine, ProfilePageContainer} from './profile.styles';

const ProfilePage = () => (
    <ProfilePageContainer>
        <ProfileNavigation/>
        <HorizontalLine/>
        <PersonalInformation/>
        <HorizontalLine/>
    </ProfilePageContainer>
);

export default ProfilePage;