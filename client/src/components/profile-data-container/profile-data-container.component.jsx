import React from "react";
import shortid from 'shortid';

import ProfileAddDataButton from "../profile-add-data-button/profile-add-data-button.component";

import {FlexTextsContainer, LabelContainer, TextContainer, UserDataContainer} from './profile-data-container.styles';

const UserData = (props) => (
    <UserDataContainer>
        <LabelContainer>{props.label}</LabelContainer>
        <FlexTextsContainer>
            {
                !props.otherText ? (
                    <TextContainer as='div'>
                        <ProfileAddDataButton/>
                    </TextContainer>
                ) : (
                    props.otherText.map((text) => (
                        <TextContainer key={shortid.generate()}>{text}</TextContainer>
                    ))
                )
            }
            {
                props.canAdd ? (
                    <TextContainer as='div'>
                        <ProfileAddDataButton/>
                    </TextContainer>
                ) : null
            }
        </FlexTextsContainer>
    </UserDataContainer>
);

export default UserData;