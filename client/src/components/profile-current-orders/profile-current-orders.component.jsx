import React from "react";

import UserData from "../profile-data-container/profile-data-container.component";

import {
    PersonalInformationContainer,
    TitleContainer
} from '../profile-personal-information/profile-personal-information.styles';

const CurrentOrders = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>Текущие заказы</TitleContainer>
        <UserData label={"Хмм..."} otherText={["Текущих заказов нет"]} loyalty={true}/>
    </PersonalInformationContainer>
);

export default CurrentOrders;