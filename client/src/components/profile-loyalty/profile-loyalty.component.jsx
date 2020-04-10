import React from "react";

import {
    PersonalInformationContainer,
    TextContainer,
    LabelContainer,
    FlexTextsContainer,
    TitleContainer,
    UserDataContainer
} from '../profile-personal-information/profile-personal-information.styles';

const Loyalty = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>И это тоже работает</TitleContainer>
        <UserDataContainer>
            <LabelContainer>Работает</LabelContainer>
            <FlexTextsContainer>
                <TextContainer>User</TextContainer>
            </FlexTextsContainer>
        </UserDataContainer>
    </PersonalInformationContainer>
);

export default Loyalty;