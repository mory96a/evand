import React, { useState } from 'react';
import StyledHamburgerMenu from "./HamburgerMenu.styles";
import { SideMenu } from '../index';
import { Button, Icon } from "../Kit";
import useClickOutSide from "../Hooks/useClickOutSide";

type Props = {
    user: Object,
    logoutUser: Function
};

const HamburgerMenu = ({user, logoutUser, ...restProps}: Props) => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    let dropdownRef = useClickOutSide(setShow);

    return (
        <StyledHamburgerMenu {...restProps} ref={dropdownRef}>
            <Button className='w-100 h-100 border-0 bg-white' onClick={handleClick}>
                <Icon id='icon' name='menu' size={30}/>
            </Button>
            <SideMenu id={`${show && 'show-side-menu'}`} user={user} logoutUser={logoutUser}/>
        </StyledHamburgerMenu>
    );
};

export default HamburgerMenu;
