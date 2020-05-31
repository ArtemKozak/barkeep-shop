import React from 'react'
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';

import {
    AdminPageContainer
} from './admin.styles';
import AdminNavigation from "../../components/admin-navigation/admin-navigation.component";
import {Line} from "../profile/profile.styles";
import AdminAllUsers from "../../components/admin-all-users/admin-all-users.component";
import AdminAllNewOrdersPreview
    from "../../components/admin-all-new-orders-preview/admin-all-new-orders-preview.component";
import AdminHome from "../../components/admin-home/admin-home.component";
import {AdminGetOrdersStart, AdminGetUserStart, AdminGetUsersToOrders} from "../../redux/admin/admin.actions";
import {selectOrdersKeys, selectUsersKeys} from "../../redux/admin/admin.selectors";

class AdminPage extends React.Component {
    componentDidMount() {
        const {AdminGetUserStart, AdminGetOrdersStart, AdminGetUsersToOrders, usersKeys, ordersKeys} = this.props;
        AdminGetUserStart();
        AdminGetOrdersStart();
        const inspect = usersKeys.length !== 0 && ordersKeys.length !== 0;
        if (inspect) {
            AdminGetUsersToOrders(usersKeys, ordersKeys);
        }
    }

    render() {
        return (
            <AdminPageContainer>
                <AdminNavigation/>
                <Line/>
                <Switch>
                    <Route exact path='/administrator_page_for_user_orders_and_other'
                           component={AdminHome}/>
                    <Route exact path='/administrator_page_for_user_orders_and_other/new-orders'
                           component={AdminAllNewOrdersPreview}/>
                    <Route exact path='/administrator_page_for_user_orders_and_other/completed-orders'
                           component={AdminAllNewOrdersPreview}/>
                    <Route exact path='/administrator_page_for_user_orders_and_other/users'
                           component={AdminAllUsers}/>
                </Switch>
                <Line/>
            </AdminPageContainer>
        )
    }
}

const mapStateToProps = () => ({
    usersKeys: selectUsersKeys,
    ordersKeys: selectOrdersKeys,

});

const mapDispatchToProps = dispatch => ({
    AdminGetUserStart: () => dispatch(AdminGetUserStart()),
    AdminGetOrdersStart: () => dispatch(AdminGetOrdersStart()),
    AdminGetUsersToOrders: (usersKeys, ordersKeys) => dispatch(AdminGetUsersToOrders({usersKeys, ordersKeys})),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);