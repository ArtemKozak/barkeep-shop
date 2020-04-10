import React from "react";

import {
    TextContainer,
    LabelContainer,
    FlexTextsContainer,
    UserDataContainer
} from './user-data-container.styles';

const UserData = (props) => (
        <UserDataContainer>
            <LabelContainer>{props.label}</LabelContainer>
            <FlexTextsContainer>
                {props.otherText.map((text) => (
                    <TextContainer>{text}</TextContainer>
                ))}
            </FlexTextsContainer>
        </UserDataContainer>
);

export default UserData;