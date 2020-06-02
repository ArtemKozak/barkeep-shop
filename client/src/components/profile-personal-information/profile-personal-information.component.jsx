import React, {useState} from "react";
import {connect} from 'react-redux';
// import PhoneInput from 'react-phone-number-input';
// import ru from 'react-phone-number-input/locale/ru'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import UserData from "../profile-data-container/profile-data-container.component";

import {
    BackgroundImage,
    DefaultBackgroundImage,
    HeadContainer,
    DataContainer,
    ImageContainer,
    PersonalInformationContainer,
    FormContainer,
    TitleContainer
} from './profile-personal-information.styles';
import CustomButton from "../custom-button/custom-button.component";
import {userUpdateStart} from "../../redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectProfileUpdateHidden} from "../../redux/profile/profile.selectors";
import {toggleUpdateHidden} from "../../redux/profile/profile.actions";
import FormInput from "../form-input/form-input.component";
import {isValidPhoneNumber} from "react-phone-number-input";


const PersonalInformation = ({currentUser, userUpdateStart, toggleUpdateHidden, profileUpdateHidden}) => {
    const [userCredentials, setCredentials] = useState({
        displayName: `${currentUser.displayName}`,
        email: `${currentUser.email}`,
        phoneNumber: `${currentUser.phoneNumber == null ? '+380' : currentUser.phoneNumber}`,
        address: `${currentUser.address == null ? '' : currentUser.address}`,
        isValid: isValidPhoneNumber(currentUser.phoneNumber),
    });

    const {displayName, email, phoneNumber, address, isValid} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (isValid) {
            userUpdateStart(displayName, email, phoneNumber, address);
            toggleUpdateHidden();
        } else {
            alert('Введите действительный номер телефона')
        }
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name]: value});
    };

    const phoneHandleChange = value => {
        const isValid = isValidPhoneNumber('+'+value);
        setCredentials({...userCredentials, phoneNumber: '+' + value, isValid: isValid});
    };

    return (
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

            {
                profileUpdateHidden ? (
                    <DataContainer>
                        <UserData label={"Имя"} otherText={[currentUser.displayName]}/>
                        <UserData label={"Электронная потча"} otherText={[currentUser.email]}/>
                        <UserData
                            label={"Телефон"}
                            otherText={[currentUser.phoneNumber]}
                            phones/>
                        <UserData
                            label={"Адресс для доставок"}
                            otherText={[currentUser.address]}
                        />
                        <CustomButton type='button' onClick={toggleUpdateHidden} userProfile>Изменить</CustomButton>
                    </DataContainer>
                ) : (
                    <DataContainer>
                        <FormContainer onSubmit={handleSubmit}>
                            <FormInput
                                name='displayName'
                                type='text'
                                handleChange={handleChange}
                                value={displayName}
                                label='Имя'
                                required
                            />
                            <FormInput
                                name='email'
                                type='email'
                                value={email}
                                handleChange={handleChange}
                                label='Эл. почта'
                                disabled
                            />
                            <PhoneInput
                                name={"phoneNumber"}
                                country={'ua'}
                                regions={'europe'}
                                onlyCountries={['ua']}
                                countryCodeEditable={false}
                                disableDropdown={true}
                                required={true}
                                value={phoneNumber}
                                onChange={phoneHandleChange}
                            />
                            <FormInput
                                name='address'
                                autocomplete="street-address"
                                type='text'
                                value={address}
                                handleChange={handleChange}
                                label='Адрес'
                            />
                            <CustomButton type='submit' userProfile>Готово</CustomButton>
                        </FormContainer>
                    </DataContainer>
                )
            }

        </PersonalInformationContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    profileUpdateHidden: selectProfileUpdateHidden,
});

const mapDispatchToProps = dispatch => ({
    toggleUpdateHidden: () => dispatch(toggleUpdateHidden()),
    userUpdateStart: (displayName, email, phoneNumber, address) => dispatch(userUpdateStart({
        displayName,
        email,
        phoneNumber,
        address
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalInformation);