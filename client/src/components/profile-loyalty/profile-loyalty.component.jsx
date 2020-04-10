import React from "react";

import UserData from "../user-data-container/user-data-container.component";

import {
    PersonalInformationContainer,
    TitleContainer
} from '../profile-personal-information/profile-personal-information.styles';

const Loyalty = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>И это тоже работает</TitleContainer>
        <UserData label={"Works"} otherText={["Some text"]}/>
    </PersonalInformationContainer>
);

export default Loyalty;