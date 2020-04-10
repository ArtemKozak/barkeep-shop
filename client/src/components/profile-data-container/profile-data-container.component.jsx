import React from "react";
import shortid from 'shortid';

import ProfileAddDataButton from "../profile-add-data-button/profile-add-data-button.component";

import {
    TextContainer,
    LabelContainer,
    FlexTextsContainer,
    UserDataContainer
} from './profile-data-container.styles';

const UserData = (props) => (
        <UserDataContainer>
            <LabelContainer>{props.label}</LabelContainer>
            <FlexTextsContainer>
                {console.log(props.otherText)}
                {
                    !props.otherText ? (
                        <TextContainer as='div'>
                            <ProfileAddDataButton />
                        </TextContainer>
                    ) : (
                        props.otherText.map((text) => (
                            <TextContainer key={shortid.generate()}>{text}</TextContainer>
                        ))
                    )
                }
            </FlexTextsContainer>
        </UserDataContainer>
);

export default UserData;