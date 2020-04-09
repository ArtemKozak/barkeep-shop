import React from "react";
import { formatPhoneNumberIntl } from 'react-phone-number-input';

import {
    PersonalInformationContainer,
    TextContainer,
    LabelContainer,
    FlexTextsContainer,
    TitleContainer,
    UserDataContainer
} from './profile-personal-information.styles';

const PersonalInformation = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>Личные данные</TitleContainer>
        <UserDataContainer>
            <LabelContainer>Имя</LabelContainer>
            <FlexTextsContainer>
                <TextContainer>{currentUser.displayName}</TextContainer>
            </FlexTextsContainer>
        </UserDataContainer>
        <UserDataContainer>
            <LabelContainer>Электронная потча</LabelContainer>
            <FlexTextsContainer>
                <TextContainer>{currentUser.email}</TextContainer>
            </FlexTextsContainer>
        </UserDataContainer>
        <UserDataContainer>
            <LabelContainer>Телефоны</LabelContainer>
            <FlexTextsContainer>
                <TextContainer>{formatPhoneNumberIntl("+380990037123")}</TextContainer>
                <TextContainer>{formatPhoneNumberIntl("+380990037123")}</TextContainer>
            </FlexTextsContainer>
        </UserDataContainer>
        <UserDataContainer>
            <LabelContainer>Адреса для доставок</LabelContainer>
            <FlexTextsContainer>
                <TextContainer>Киев, МИЛОСЛАВСКАЯ УЛ., д.16 кв.282</TextContainer>
                <TextContainer>Киев, ЛИСКОВСКАЯ УЛ., д.32/51 кв.95</TextContainer>
            </FlexTextsContainer>
        </UserDataContainer>
    </PersonalInformationContainer>
);

export default PersonalInformation;