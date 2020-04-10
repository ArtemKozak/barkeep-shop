import React from "react";
import {formatPhoneNumberIntl} from 'react-phone-number-input';

import UserData from "../profile-data-container/profile-data-container.component";

import {PersonalInformationContainer, TitleContainer} from './profile-personal-information.styles';

const PersonalInformation = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>Личные данные</TitleContainer>
        <UserData label={"Имя"} otherText={[currentUser.displayName]}/>
        <UserData label={"Электронная потча"} otherText={[currentUser.email]}/>
        <UserData
            label={"Телефоны"}
            otherText={[formatPhoneNumberIntl("+380990123456"), formatPhoneNumberIntl("+380997891011")]}
            canAdd={true}/>
        <UserData
            label={"Адреса для доставок"}
            otherText={["Киев, НАЗВАНИЕ2 УЛ., д.2/5 кв.45", "Киев, НАЗВАНИЕ1 УЛ., д.4 кв.52"]}
            canAdd={true}
        />
    </PersonalInformationContainer>
);

export default PersonalInformation;