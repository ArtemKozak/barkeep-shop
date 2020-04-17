import React from "react";

import UserData from "../profile-data-container/profile-data-container.component";

import {
    BackgroundImage,
    DefaultBackgroundImage,
    HeadContainer,
    ImageContainer,
    PersonalInformationContainer,
    TitleContainer
} from './profile-personal-information.styles';

const PersonalInformation = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>Личные данные</TitleContainer>
        <HeadContainer>
            <ImageContainer>
                {currentUser.photoURL ? (
                    <BackgroundImage photoURL={currentUser.photoURL}/>
                ) : (
                    <DefaultBackgroundImage/>
                )}
            </ImageContainer>
        </HeadContainer>
        <UserData label={"Имя"} otherText={[currentUser.displayName]}/>
        <UserData label={"Электронная потча"} otherText={[currentUser.email]}/>
        <UserData
            label={"Телефоны"}
            otherText={currentUser.phoneNumbers}
            phones={true}
            canAdd={true}/>
        <UserData
            label={"Адреса для доставок"}
            otherText={currentUser.addresses}
            canAdd={true}
        />
    </PersonalInformationContainer>
);

export default PersonalInformation;