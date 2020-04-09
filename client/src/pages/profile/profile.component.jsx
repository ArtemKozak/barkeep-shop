import React from 'react';

import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component";
import PersonalInformation from "../../components/menu-personal-information/menu-personal-information.component";

import {ProfilePageContainer, HorizontalLine} from './profile.styles';

const ProfilePage = () => (
    <ProfilePageContainer>
        <ProfileNavigation/>
        <HorizontalLine/>
        <PersonalInformation/>
    </ProfilePageContainer>
);

export default ProfilePage;