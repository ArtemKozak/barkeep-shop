import React from "react";

import UserData from "../profile-data-container/profile-data-container.component";

import {PersonalInformationContainer, TitleContainer} from './profile-personal-information.styles';

const PersonalInformation = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>Личные данные</TitleContainer>
        <UserData label={"Имя"} otherText={[currentUser.displayName]}/>
        <UserData label={"Электронная потча"} otherText={[currentUser.email]}/>
        <UserData
            label={"Телефоны"}
            otherText={[currentUser.phones]}
            phones={true}
            canAdd={true}/>
        <UserData
            label={"Адреса для доставок"}
            otherText={[currentUser.addresses]}
            canAdd={true}
        />
    </PersonalInformationContainer>
);

export default PersonalInformation;