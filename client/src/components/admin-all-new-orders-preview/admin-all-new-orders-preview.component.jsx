import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {} from './admin-all-new-orders-preview.styles';
import {AdminNewOrdersContainer, TitleContainer} from "../admin-new-orders/admin-new-orders.styles";
import {selectOrdersForPreview, selectOrdersKeys, selectUsersKeys} from "../../redux/admin/admin.selectors";
import AdminNewOrders from "../admin-new-orders/admin-new-orders.component";
import {AdminGetOrdersStart, AdminGetUsersToOrders} from "../../redux/admin/admin.actions";

import {
    AdminCustomButtonContainer,
    AdminHeaderContainer
} from "../admin-all-users/admin-all-users.styles";

class AdminAllNewOrdersPreview extends React.Component {
    componentDidMount() {
        const {AdminGetUsersToOrders, usersKeys, ordersKeys} = this.props;
        const inspect = usersKeys.length !== 0 && ordersKeys.length !== 0;
        if (inspect) {
            AdminGetUsersToOrders(usersKeys, ordersKeys);
        }
    }

    render() {
        return (
            <AdminNewOrdersContainer>
                <AdminHeaderContainer>
                    <TitleContainer>Новые заказы</TitleContainer>
                    <AdminCustomButtonContainer
                        onClick={() => this.props.AdminGetOrdersStart()}>ОБНОВИТЬ</AdminCustomButtonContainer>
                </AdminHeaderContainer>
                {
                    this.props.userOrders ? (this.props.userOrders
                            .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
                            .map(order => (
                                <AdminNewOrders key={order.id} orderId={order.id} orderProps={order}/>
                            ))
                    ) : null
                }
            </AdminNewOrdersContainer>
        );
    }

}


const mapStateToProps = createStructuredSelector({
    userOrders: selectOrdersForPreview,
    usersKeys: selectUsersKeys,
    ordersKeys: selectOrdersKeys,
});

const mapDispatchToProps = dispatch => ({
    AdminGetOrdersStart: () => dispatch(AdminGetOrdersStart()),
    AdminGetUsersToOrders: (usersKeys, ordersKeys) => dispatch(AdminGetUsersToOrders({usersKeys, ordersKeys})),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminAllNewOrdersPreview);