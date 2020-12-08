import React from 'react';
import StyledUserSideMenu from "./UserSideMenu.styles";
import { UserProfile } from "../index";
import { Link } from '../Kit';

type Props = {
    user: Object,
    logoutUser: Function
};

const UserSideMenu = ({user, logoutUser, ...restProps}: Props) => {

    const handleExit = () => {
        logoutUser();
        localStorage.removeItem('token');
    };

    return (
        <StyledUserSideMenu {...restProps}>
            <UserProfile user={user} className='mr-3 my-4'/>
            <div id='border-div'/>
            <Link className='mr-3 mt-3 mb-2' isanchor={0} fontSize={13} path=''>
                بلیت های من
            </Link>
            <Link className='mr-3 my-2' isanchor={0} path='' fontSize={13}>
                ایجاد رویداد آنلاین(وبینار)
            </Link>
            <Link className='mr-3 my-2' isanchor={0} path='' fontSize={13}>
                ایجاد رویداد حضوری
            </Link>
            <Link className='mr-3 my-2' isanchor={0} path='' fontSize={13}>
                رویداد ها
            </Link>
            <Link className='mr-3 my-2' isanchor={0} path='' fontSize={13}>
                برگزارکندده ها
            </Link>
            <Link className='mr-3 my-2' isanchor={0} path='' fontSize={13}>
                راهنما
            </Link>
            <Link className='mr-3 my-2' isanchor={0} path='' fontSize={13}>
                دریافت سریع بلیت
            </Link>
            <Link className='mr-3 my-2' isanchor={0} path='/' onClick={handleExit} fontSize={13}>
                خروج
            </Link>
        </StyledUserSideMenu>
    );
};

export default UserSideMenu;