import React from 'react';
import StyledHeader from "./Header.styles";
import { HeaderSearch, Navbar, HamburgerMenu } from "../../index";
import { connect } from 'react-redux';
import { logoutUser } from '../../../redux/modules/users/users';

const Header = ({user, logoutUser}) => {

    return (
        <StyledHeader>
            <div className='d-flex align-items-center'>
                <h3 id='input-header' className='mr-3'>EVAND</h3>
                <HeaderSearch/>
            </div>
            <h2 id='header-h2'>EVAND</h2>
            <Navbar id='navbar' className='mx-auto' user={user} logoutUser={logoutUser}/>
            <HamburgerMenu id='hamburger-menu' user={user} logoutUser={logoutUser}/>
        </StyledHeader>
    );
};

const mapStateToProp = (state) => ({
    user: state.user.user
});

export default connect(mapStateToProp, {logoutUser: logoutUser})(Header);

