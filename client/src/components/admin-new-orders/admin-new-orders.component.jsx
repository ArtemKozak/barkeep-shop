import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {
    AdminNewOrdersContainer,
    AdminOrderContainer,
    UserInformation,
    ImageContainer,
    DefaultBackgroundImage,
    TitleContainer,
    AdminDataContainer,
    AdminImageAndStatus,
    AdminOrderStatusContainer,
    AdminCartItemsContainer,
    AdminScrollData,
    AdminOrderControlButtons,
    AdminCartItems
} from './admin-new-orders.styles';


import {DataContainer, FormContainer} from "../profile-personal-information/profile-personal-information.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {selectProfileUpdateHidden} from "../../redux/profile/profile.selectors";
import {toggleUpdateHidden} from "../../redux/profile/profile.actions";
import {userUpdateStart} from "../../redux/user/user.actions";
import UserData from "../profile-data-container/profile-data-container.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import OrderFixedItem from "../checkout-fixed-item/checkout-fixed-item.component";
import {StatusText} from "../order-item-list/order-item-list.styles";
import {TotalContainer} from "../checkout-data/checkout-data.styles";


const AdminNewOrders = ({currentUser, userUpdateStart, toggleUpdateHidden, profileUpdateHidden, cartItems, total}) => {
    const [userCredentials, setCredentials] = useState({
        displayName: `${currentUser.displayName}`,
        email: `${currentUser.email}`,
        phoneNumber: `${currentUser.phoneNumber == null ? '+380' : currentUser.phoneNumber}`,
        address: `${currentUser.address == null ? '' : currentUser.address}`
    });

    const {displayName, email, phoneNumber, address} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        userUpdateStart(displayName, email, phoneNumber, address);
        toggleUpdateHidden();
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name]: value});
    };

    const orderStatus = 4;

    return (
        <AdminNewOrdersContainer>
            <TitleContainer>Новые заказы</TitleContainer>
            <AdminOrderContainer>
                <UserInformation>
                    <AdminImageAndStatus>
                        <AdminOrderStatusContainer>
                            {
                                orderStatus === -1 ? (
                                    <StatusText className={'red'}>Отменен</StatusText>
                                ) : orderStatus === 0 ? (
                                    <StatusText className={'orange'}>Новый заказ</StatusText>
                                ) : orderStatus === 1 ? (
                                    <StatusText className={'gray'}>Обработан</StatusText>
                                ) : orderStatus === 2 ? (
                                    <StatusText className={'gray'}>Доставляется</StatusText>
                                ) : orderStatus >= 3 ? (
                                    <StatusText className={'green'}>Выполнен</StatusText>
                                ) : (
                                    <StatusText>Ошибка</StatusText>
                                )
                            }
                        </AdminOrderStatusContainer>
                        <ImageContainer>
                            <DefaultBackgroundImage/>
                        </ImageContainer>
                        <TotalContainer>
                            Итого {total} грн
                        </TotalContainer>
                        <AdminOrderControlButtons>
                            <CustomButton type='button' adminUserProfileRed>Отменить</CustomButton>
                            <CustomButton type='button' adminUserProfileGreen>Дальше</CustomButton>
                        </AdminOrderControlButtons>
                    </AdminImageAndStatus>
                    {
                        profileUpdateHidden ? (
                            <AdminDataContainer>
                                <AdminScrollData>
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
                                    <UserData label={"Бонусные баллы"} otherText={[0]}/>
                                </AdminScrollData>
                                <CustomButton type='button' onClick={toggleUpdateHidden} userProfile>
                                    Изменить
                                </CustomButton>
                            </AdminDataContainer>
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
                                    <FormInput
                                        name='phoneNumber'
                                        type='tel'
                                        value={phoneNumber}
                                        handleChange={handleChange}
                                        label='Телефон'
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
                        )}
                    <AdminCartItemsContainer>
                        <AdminCartItems>
                        {
                            cartItems ?
                                cartItems.map(cartItem => (
                                        <OrderFixedItem key={cartItem.id} admin={true} cartItem={cartItem}/>
                                    )
                                ) : (
                                    <p>Пусто</p>
                                )
                        }
                        </AdminCartItems>
                        <CustomButton type='button' userProfile>
                            Изменить
                        </CustomButton>
                    </AdminCartItemsContainer>
                </UserInformation>

            </AdminOrderContainer>
        </AdminNewOrdersContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    profileUpdateHidden: selectProfileUpdateHidden,
    currentUser: selectCurrentUser,
    cartItems: selectCartItems,
    total: selectCartTotal
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminNewOrders);