import React from 'react';
import StyledGuestSideMenu from "./GuestSideMenu.styles";
import { Link } from "../index";

type Props = {};

const GuestSideMenu = (props: Props) => {
    return (
        <StyledGuestSideMenu {...props}>
            <div className='w-100 border-bottom'>
                <Link className='justify-content-end mr-3 my-3' isanchor={0} path='/signin'>
                    <span>ورود</span>
                </Link>
                <Link className='justify-content-end mr-3 mt-3 mb-4' isanchor={0} path='/signup'><span>عضویت</span></Link>
            </div>
            <Link className='justify-content-end mr-3 mt-4 mb-3' isanchor={0}
                  path=''><span>ایجاد رویداد آنلاین(وبینار)</span></Link>
            <Link className='justify-content-end mr-3 my-3' isanchor={0} path=''><span>ایجاد رویداد حضوری</span></Link>
            <Link className='justify-content-end mr-3 my-3' isanchor={0} path='/events'><span>رویداد ها</span></Link>
            <Link className='justify-content-end mr-3 my-3' isanchor={0} path=''><span>برگزارکندده ها</span></Link>
            <Link className='justify-content-end mr-3 my-3' isanchor={0} path=''><span>راهنما</span></Link>
            <Link className='justify-content-end mr-3 my-3' isanchor={0} path=''><span>دریافت سریع بلیت</span></Link>
        </StyledGuestSideMenu>
    );
};

export default GuestSideMenu;