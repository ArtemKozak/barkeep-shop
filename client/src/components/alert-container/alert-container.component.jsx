import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';


import {
    AlertButton,
    AlertDropdownContainer,
    AlertItemsContainer,
    HeadMessageContainer,
    AlertMessageContainer,
    FullScreenDropdownContainer,
    CloseAlertDropdownContainer,
    CloseAlertTextContainer
} from './alert-container.styles';
import {createNewOrderSuccessAccepted} from "../../redux/cart/cart.actions";
import {selectOrdersForPreview} from "../../redux/admin/admin.selectors";


const CheckoutSuccess = ({history, createNewOrderSuccessAccepted}) => (
    <FullScreenDropdownContainer>
        <CloseAlertDropdownContainer onClick={createNewOrderSuccessAccepted}/>
        <AlertDropdownContainer>
            <CloseAlertTextContainer onClick={createNewOrderSuccessAccepted}>Закрыть</CloseAlertTextContainer>
            <AlertItemsContainer>
                <HeadMessageContainer>Заказ принят!</HeadMessageContainer>
                <AlertMessageContainer>Более подробную информацию можно посмотреть в личном кабинете</AlertMessageContainer>
            </AlertItemsContainer>

            <AlertButton
                onClick={() => {
                    history.push('/profile/orders-history/');
                    createNewOrderSuccessAccepted();
                }}
            >
                МОИ ЗАКАЗЫ
            </AlertButton>
        </AlertDropdownContainer>
    </FullScreenDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    userOrders: selectOrdersForPreview,
});

const mapDispatchToProps = dispatch => ({
    createNewOrderSuccessAccepted: () => dispatch(createNewOrderSuccessAccepted()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutSuccess));
