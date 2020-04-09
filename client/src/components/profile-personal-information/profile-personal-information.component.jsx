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
                <TextContainer>{formatPhoneNumberIntl("+380990123456")}</TextContainer>
                <TextContainer>{formatPhoneNumberIntl("+380997891011")}</TextContainer>
            </FlexTextsContainer>
        </UserDataContainer>
        <UserDataContainer>
            <LabelContainer>Адреса для доставок</LabelContainer>
            <FlexTextsContainer>
                <TextContainer>Киев, НАЗВАНИЕ1 УЛ., д.4 кв.52</TextContainer>
                <TextContainer>Киев, НАЗВАНИЕ2 УЛ., д.2/5 кв.45</TextContainer>
            </FlexTextsContainer>
        </UserDataContainer>
    </PersonalInformationContainer>
);

export default PersonalInformation;