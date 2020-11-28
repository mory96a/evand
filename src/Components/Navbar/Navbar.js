import React from 'react';
import StyledNavbar from "./Navbar.styles";
import { Link, UserProfile } from "../index";


type Props = {};

const Navbar = ({className, user, logoutUser}: Props) => {
    const userLoggedIn = !!user.data;
    return (
        <StyledNavbar {...className}>
            <div className={`d-${userLoggedIn ? 'none' : 'flex'}`}>
                <Link isanchor={0} path='/signin'>ورود</Link>
                <Link className='mx-3' isanchor={0} path='/signup'>عضویت</Link>
            </div>
            {
                !!userLoggedIn ? (
                    <UserProfile user={user} className='mr-3' logoutUser={logoutUser}/>
                ) : null
            }
            <Link className='mx-3' isanchor={0} path=''>ایجاد رویداد</Link>
            <Link className='mx-3' isanchor={0} path='/events'>رویداد ها</Link>
            <Link className='mx-3' isanchor={0} path=''>برگزار کننده ها</Link>
            <Link className='mx-3' isanchor={0} path=''>راهنما</Link>
            <Link className='mx-3' isanchor={0} path=''>دریافت سریع بلیت</Link>
        </StyledNavbar>
    );
};

export default Navbar;
