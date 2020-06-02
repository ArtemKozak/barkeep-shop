import React, {useState} from 'react';
import {createStructuredSelector} from "reselect";

import {
    CheckoutDataContainer,
    CheckoutUserTitle,
    CheckoutContactData,
    CheckoutFormContainer,
    UserDataBlock
} from './checkout-data.styles';

import FormInputForData from "../form-input-for-data/form-input-for-data.component";
import CustomButton from "../custom-button/custom-button.component";

import {userUpdateStart} from "../../redux/user/user.actions";
import {createNewOrderStart} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {selectCartItems, selectCartItemsCount, selectCartTotal} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {isValidPhoneNumber} from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";


const CheckoutDataBlock = ({cartItems, total, currentUser, itemsCount, userUpdateStart, createNewOrderStart}) => {
    const [userCredentials, setCredentials] = useState({
        uid: `${currentUser.uid}`,
        displayName: `${currentUser.displayName}`,
        email: `${currentUser.email}`,
        phoneNumber: `${currentUser.phoneNumber == null ? '+380' : currentUser.phoneNumber}`,
        address: `${currentUser.address == null ? '' : currentUser.address}`,
        isValid: isValidPhoneNumber(currentUser.phoneNumber),
    });

    const {uid, displayName, email, phoneNumber, address, isValid} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (isValid) {
            userUpdateStart(displayName, email, phoneNumber, address);
            const orderUserData = {uid, displayName, email, phoneNumber, address};
            createNewOrderStart(orderUserData, cartItems, total);
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
        <CheckoutDataContainer>
            <UserDataBlock>
                <CheckoutUserTitle>
                    Контактные данные
                </CheckoutUserTitle>
                <CheckoutContactData>
                    <CheckoutFormContainer>
                        <FormInputForData
                            name='displayName'
                            type='text'
                            handleChange={handleChange}
                            value={displayName}
                            label='Имя и фамилия'
                            required
                        />
                        <FormInputForData
                            name='email'
                            type='email'
                            handleChange={handleChange}
                            value={email}
                            label='Электронная почта'
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
                        <FormInputForData
                            name='address'
                            type='text'
                            handleChange={handleChange}
                            value={address}
                            label='Адрес получателя'
                            required
                        />
                        <CustomButton onClick={handleSubmit}>Заказ подтверждаю</CustomButton>
                    </CheckoutFormContainer>
                </CheckoutContactData>
            </UserDataBlock>
        </CheckoutDataContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser,
    itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    userUpdateStart: (displayName, email, phoneNumber, address) => dispatch(userUpdateStart({
        displayName,
        email,
        phoneNumber,
        address
    })),
    createNewOrderStart: (orderUserData, cartItems, total) => dispatch(createNewOrderStart({
        orderUserData, cartItems, total
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutDataBlock);
