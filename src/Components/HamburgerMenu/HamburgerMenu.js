import React, { useState } from 'react';
import StyledHamburgerMenu from "./HamburgerMenu.styles";
import { Icon, SideMenu } from '../index';

type Props = {};

const HamburgerMenu = ({user,logoutUser, ...restProps}: Props) => {

    return (
        <StyledHamburgerMenu {...restProps}>
            <input type="checkbox" id='hamburger-checkbox'/>
            <Icon id='icon' name='menu' size={30}/>
            <SideMenu id='side-menu' user={user} logoutUser={logoutUser}/>
        </StyledHamburgerMenu>
    );
};

export default HamburgerMenu;