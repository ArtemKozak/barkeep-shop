import React from "react";

import UserData from "../profile-data-container/profile-data-container.component";

import {
    PersonalInformationContainer,
    TitleContainer
} from '../profile-personal-information/profile-personal-information.styles';

const OrdersHistory = ({currentUser}) => (
    <PersonalInformationContainer>
        <TitleContainer>История Ваших заказов</TitleContainer>
        <UserData
            label={"Упс"}
            otherText={["Кажется Вы еще у нас не заказывали... Может время сделать Ваш первый заказ?"]}
            loyalty={true}
        />
    </PersonalInformationContainer>
);

export default OrdersHistory;