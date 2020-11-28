import React, { useState } from "react";
import StyledSignIn from "./SignIn.styles";
import { Input, Button } from "../index";

const SignIn = ({loginUser}) => {

    const [user, setUser] = useState({email: '', password: ''});

    function handleSubmit(event) {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const userObject = {
            email, password
        }
        loginUser(userObject);
        setUser({email: '', password: ''});
    }

    function handleChange(event) {
        const {value, name} = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <StyledSignIn>
            <h3>I already have an account</h3>
            <p>Sign in with your email and password.</p>
            <form onSubmit={handleSubmit}>
                <Input
                    className='my-4'
                    type='text'
                    name='email'
                    handleChange={handleChange}
                    value={user.email}
                    label='email'
                />
                <Input
                    className='mb-5 mt-4'
                    type='password'
                    name='password'
                    handleChange={handleChange}
                    value={user.password}
                    label='password'
                />
                <Button
                    border={2}
                    width={200}
                    height={50}
                    background={'darkBlue'}
                >
                    Sign In
                </Button>
            </form>
        </StyledSignIn>
    );
};

export default SignIn;