import React from 'react';
import StyledSignInSignUpAlert from "./SignInSignUpAlert.styles";
import { Button, Text } from "../Kit";

const SignInSignUpAlert = ({isLoggedIn, loadAuthModal}) => {

    const handleClick = () => {
        loadAuthModal();
    };

    return (
        <StyledSignInSignUpAlert show={!isLoggedIn}>
            <Text className='text-right'>برای مشاهده رویدادها بر اساس علاقه‌مندی‌های خود حساب کاربری بسازید و یا وارد
                شوید.</Text>
            <div id='button-wrapper' className='d-flex justify-content-between'>
                <Button width={130} background={'darkBlue'} onClick={handleClick}>
                    <Text size={13} color={'white'}>عضویت سریع</Text>
                </Button>
                <Button width={130} background={'darkBlue'} onClick={handleClick}>
                    <Text size={13} color={'white'}> ورود به ایوند</Text>
                </Button>
            </div>
        </StyledSignInSignUpAlert>
    );
};

export default SignInSignUpAlert;