import React from "react";
import StyledSignIn from "./SignIn.styles";
import { Input, Button, Text, Link } from '../Kit';

const SignIn = ({loginUser}) => {

    // const [user, setUser] = useState({email: '', password: ''});

    function handleSubmit(event) {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const userObject = {
            email, password
        };
        loginUser(userObject);
    }

    //
    // function handleChange(event) {
    //     const {value, name} = event.target;
    //     setUser({
    //         ...user,
    //         [name]: value
    //     });
    // }

    return (
        <StyledSignIn className='flex-md-row justify-content-md-between mt-4'>

                <div id='button-list' className='d-flex flex-column align-items-center px-3'>
                    <Text size={13} className='text-center mb-4'>با استفاده از شبکه های اجتماعی خود وارد
                        شوید.</Text>
                    <Button className='w-100 mb-3'>ورود با تلگرام</Button>
                    <Button className='w-100 mb-3'>ورود با تلگرام</Button>
                    <Button className='w-100 mb-3'>ورود با تلگرام</Button>
                </div>

                <div id='form-wrapper' className='d-flex flex-column align-items-center px-3'>
                    <Text size={13} className='mt-md-0 text-center mb-4'>
                        یا با ایمیل خود وارد شوید و یا اگر هنوز ثبت نام نکرده اید ثبت نام کنید.
                    </Text>

                    <form onSubmit={handleSubmit} className='d-flex flex-column'>
                        <Input name='email' borderColor={'lightGray'} type='text' className='w-100 mb-3 p-2 text-left'
                               placeholder='ایمیل'/>
                        <Input name='password' borderColor={'lightGray'} type='password' className=' p-2 text-left'
                               placeholder='کلمه عبور'/>
                        <Button fontSize={14} background={'darkBlue'} color={'white'} className='my-3' width={80}
                                height={40}>
                            ورود
                        </Button>
                    </form>

                    <span className='w-100 d-flex justify-content-start mt-3'>
                        <Text size={13}>رمز عبور خود را فراموش کرده اید؟ </Text>
                        <Link className='d-inline-block mx-1' path='' fontSize={13}> کلیک کنید.</Link>
                    </span>
                </div>

        </StyledSignIn>
    );
};

export default SignIn;