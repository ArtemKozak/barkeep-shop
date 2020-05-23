import React, {useState} from 'react';

import {
    CheckoutDataContainer,
    TotalContainer,
    CheckoutData,
    CheckoutUserTitle,
    CheckoutContactData,
    ItemsBlock,
    CheckoutFormContainer,
    ItemsGroup,
    UserDataBlock
} from './checkout-data.styles';

import FormInputForData from "../form-input-for-data/form-input-for-data.component";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from "../custom-button/custom-button.component";
import {CheckoutBlock} from "../../pages/cart/checkout.styles";


const CheckoutDataBlock = ({cartItems, total, currentUser}) => {
    const [userCredentials, setCredentials] = useState({
        displayName: `${currentUser.displayName}`,
        email: `${currentUser.email}`,
        phoneNumber: `${currentUser.phoneNumber == null ? '' : currentUser.phoneNumber}`,
        address: `${currentUser.address == null ? '' : currentUser.address}`
    });

    const {displayName, email, phoneNumber, address} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        // userUpdateStart(displayName, email, phoneNumber, address);
        // toggleUpdateHidden();
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name]: value});
    };

    return (
        <CheckoutDataContainer>
            <CheckoutData>
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
                                required
                            />
                            <FormInputForData
                                name='phoneNumber'
                                type='tel'
                                handleChange={handleChange}
                                value={phoneNumber}
                                label='Телефон'
                                required
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
                <ItemsBlock>
                    <ItemsGroup>
                        {cartItems.map(cartItem => (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                        ))}
                    </ItemsGroup>
                    <TotalContainer>Всего: {total} грн</TotalContainer>
                </ItemsBlock>
            </CheckoutData>
        </CheckoutDataContainer>
    )
};

export default CheckoutDataBlock;
