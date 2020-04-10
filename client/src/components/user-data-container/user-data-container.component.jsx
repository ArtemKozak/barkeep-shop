import React from "react";
import shortid from 'shortid';

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
                {
                    props.otherText.map((text) => (
                    <TextContainer key={shortid.generate()}>{text}</TextContainer>
                ))}
            </FlexTextsContainer>
        </UserDataContainer>
);

export default UserData;