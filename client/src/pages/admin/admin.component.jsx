import React from 'react'
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';

import {
    AdminPageContainer
} from './admin.styles';
import AdminNavigation from "../../components/admin-navigation/admin-navigation.component";
import {Line} from "../profile/profile.styles";
import AdminNewOrders from "../../components/admin-new-orders/admin-new-orders.component";

const AdminPage = () => {
    return (
        <AdminPageContainer>
            <AdminNavigation/>
            <Line/>
            <Switch>
                <Route exact path='/administrator_page_for_user_orders_and_other'
                       component={AdminNewOrders}/>
                <Route exact path='/administrator_page_for_user_orders_and_other/new-orders/'
                       component={AdminNewOrders}/>
                <Route exact path='/administrator_page_for_user_orders_and_other/completed-orders'
                       component={AdminNewOrders}/>
                <Route exact path='/administrator_page_for_user_orders_and_other/users'
                       component={AdminNewOrders}/>
            </Switch>
            <Line/>
        </AdminPageContainer>
    )
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(AdminPage);