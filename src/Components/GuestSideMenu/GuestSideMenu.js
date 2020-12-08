import React from 'react';
import StyledGuestSideMenu from "./GuestSideMenu.styles";
import { Link } from "../Kit";

const GuestSideMenu = (props) => {
    return (
        <StyledGuestSideMenu {...props}>
            <div className='d-flex flex-column align-items-start w-100 border-bottom'>
                <Link className='mr-3 my-3' isanchor={0} path='/signin' fontSize={13}>
                    ورود
                </Link>
                <Link className='mr-3 mt-3 mb-4' isanchor={0} path='/signup' fontSize={13}>
                    عضویت
                </Link>
            </div>
            <Link className='mr-3 mt-4 mb-3' isanchor={0} path='' fontSize={13}>
                ایجاد رویداد آنلاین(وبینار)
            </Link>
            <Link className='mr-3 my-3' isanchor={0} path='' fontSize={13}>
                ایجاد رویداد حضوری
            </Link>
            <Link className='mr-3 my-3' isanchor={0} path='/events' fontSize={13}>
                رویداد ها
            </Link>
            <Link className='mr-3 my-3' isanchor={0} path='' fontSize={13}>
                برگزارکندده ها
            </Link>
            <Link className='mr-3 my-3' isanchor={0} path='' fontSize={13}>
                راهنما
            </Link>
            <Link className='mr-3 my-3' isanchor={0} path='' fontSize={13}>
                دریافت سریع بلیت
            </Link>
        </StyledGuestSideMenu>
    );
};

export default GuestSideMenu;