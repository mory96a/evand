import React from 'react';
import StyledNavbar from "./Navbar.styles";
import { Link, UserProfile } from "../index";
import { Text } from "../Kit";

type Props = {};

const Navbar = ({className, user, logoutUser, loadAuthModal}: Props) => {

    const userLoggedIn = !!user.data;

    const handleShowModal = () => {
        loadAuthModal();
    };

    return (
        <StyledNavbar {...className}>
            <div className={`d-${userLoggedIn ? 'none' : 'flex'}`}>
                <Text id='text' size={14} onClick={handleShowModal}>ورود</Text>
                <Link className='mx-3' isanchor={0} path='/login-register'>عضویت</Link>
            </div>
            {
                !!userLoggedIn ? (
                    <UserProfile user={user} className='mr-3' logoutUser={logoutUser}/>
                ) : null
            }
            <Link className='mx-3' isanchor={0} path='' fontSize={13}>ایجاد رویداد</Link>
            <Link className='mx-3' isanchor={0} path='/events' fontSize={13}>رویداد ها</Link>
            <Link className='mx-3' isanchor={0} path='' fontSize={13}>برگزار کننده ها</Link>
            <Link className='mx-3' isanchor={0} path='' fontSize={13}>راهنما</Link>
            <Link className='mx-3' isanchor={0} path='' fontSize={13}>دریافت سریع بلیت</Link>
        </StyledNavbar>
    );
};

export default Navbar;
