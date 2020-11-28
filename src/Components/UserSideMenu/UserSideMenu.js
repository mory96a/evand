import React from 'react';
import StyledUserSideMenu from "./UserSideMenu.styles";
import { Link, UserProfile } from "../index";

type Props = {};

const UserSideMenu = ({user,logoutUser, restProps}: Props) => {

    const handleExit = ()=> {
        logoutUser();
        localStorage.removeItem('token');
    }
    return (
        <StyledUserSideMenu {...restProps}>
            <UserProfile user={user} className='mr-3 my-4'/>

            <div id='border-div'/>

            <Link className='mr-3 mt-3 mb-2' isanchor={0}
                  path=''><span>بلیت های من</span></Link>
            <Link className='mr-3 my-2' isanchor={0}
                  path=''><span>ایجاد رویداد آنلاین(وبینار)</span></Link>
            <Link className='mr-3 my-2' isanchor={0} path=''><span>ایجاد رویداد حضوری</span></Link>
            <Link className='mr-3 my-2' isanchor={0} path=''><span>رویداد ها</span></Link>
            <Link className='mr-3 my-2' isanchor={0} path=''><span>برگزارکندده ها</span></Link>
            <Link className='mr-3 my-2' isanchor={0} path=''><span>راهنما</span></Link>
            <Link className='mr-3 my-2' isanchor={0} path=''><span>دریافت سریع بلیت</span></Link>
            <Link className='mr-3 my-2' isanchor={0} path='/' onClick={handleExit}><span>خروج</span></Link>
        </StyledUserSideMenu>
    );
};

export default UserSideMenu;