import React from "react";

import UserData from "../profile-data-container/profile-data-container.component";

import {
    PersonalInformationContainer,
    TitleContainer
} from '../profile-personal-information/profile-personal-information.styles';

const OrdersHistory = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>Ну ты совсем ебобо?</TitleContainer>
        <UserData label={"Сказали же"} otherText={["НЕ ОТКРЫВАЙ, так нет, тебе же интересно, иди делом займись"]} loyalty={true}/>
    </PersonalInformationContainer>
);

export default OrdersHistory;