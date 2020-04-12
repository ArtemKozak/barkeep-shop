import React from 'react';
import {connect} from 'react-redux';

import {toggleSidebarHidden} from "../../redux/sidebar/sidebar.actions";
import MobileMenuFixedButton from "../mobile-sidebar/mobile-sidebar.component";

import {SidebarToggleContainer} from './mobile-sidebar-icon.styles';

const SidebarIcon = ({toggleSidebarHidden}) => (
    <SidebarToggleContainer onClick={toggleSidebarHidden}>
        <MobileMenuFixedButton/>
    </SidebarToggleContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleSidebarHidden: () => dispatch(toggleSidebarHidden())
});

export default connect(
    null,
    mapDispatchToProps
)(SidebarIcon);
