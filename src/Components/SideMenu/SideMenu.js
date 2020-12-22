import React from 'react';
import StyledSideMenu from "./SideMenu.styles";
import { GuestSideMenu, UserSideMenu } from '../index';

type Props = {};

const SideMenu = ({user, logoutUser, ...restProps}: Props) => {

    const userLoggedIn = !!user.data;

    return (
        <StyledSideMenu {...restProps} >
            <GuestSideMenu id='guest-side-menu' className={`d-${userLoggedIn && 'none'}`}/>
            {
                !!userLoggedIn ? (
                    <UserSideMenu
                        id='user-side-menu'
                        className={`d-${!userLoggedIn && 'none'}`}
                        user={user}
                        logoutUser={logoutUser}
                    />
                ) : null
            }
        </StyledSideMenu>
    );
};

export default SideMenu;