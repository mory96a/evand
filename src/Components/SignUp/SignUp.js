import React, { useState } from "react";
import StyledSignUp from "./SignUp.styles";
import { Button, Input } from "../index";

const SignUp = () => {

    const [user, setUser] = useState({email: '', password: '', name: '', confirmPassword: ''});

    function handleSubmit(event) {
        event.preventDefault();
        setUser({email: '', password: '', name: '', confirmPassword: ''});
    }

    function handleChange(event) {
        const {value, name} = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <StyledSignUp>
            <h3>I dont have an account</h3>
            <p>Sign up with your email and password.</p>
            <form onSubmit={handleSubmit}>
                <Input
                    className='my-4'
                    type='text'
                    name='name'
                    handleChange={handleChange}
                    value={user.name}
                    label='name'
                />
                <Input
                    className='my-4'
                    type='text'
                    name='email'
                    handleChange={handleChange}
                    value={user.email}
                    label='email'
                />
                <Input
                    className='my-4'
                    type='password'
                    name='password'
                    handleChange={handleChange}
                    value={user.password}
                    label='password'
                />
                <Input
                    className='mb-5 mt-4'
                    type='password'
                    name='confirmPassword'
                    handleChange={handleChange}
                    value={user.confirmPassword}
                    label='confirm password'
                />
                <Button
                    border={2}
                    width={200}
                    height={50}
                    background={'darkBlue'}
                >
                    Sign Up
                </Button>
            </form>
        </StyledSignUp>
    );
};

export default SignUp;