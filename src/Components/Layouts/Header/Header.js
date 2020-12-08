import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../redux/modules/users/users';
import StyledHeader from "./Header.styles";
import { HeaderSearch, Navbar, HamburgerMenu } from "../../index";
import { Text } from '../../Kit';

const Header = ({user, logoutUser}) => {
    return (
        <StyledHeader>
            <HamburgerMenu id='hamburger-menu' user={user} logoutUser={logoutUser}/>
            <Navbar id='navbar' className='mx-auto' user={user} logoutUser={logoutUser}/>
            <Text type='h1' id='header-h1'>EVAND</Text>
            <div className='d-flex align-items-center'>
                <HeaderSearch/>
                <Text type='h3' id='input-header' className='mr-3'>
                    EVAND
                </Text>
            </div>
        </StyledHeader>
    );
};

const mapStateToProp = (state) => ({
    user: state.user.user
});

export default connect(mapStateToProp, {logoutUser: logoutUser})(Header);

