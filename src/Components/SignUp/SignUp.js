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

        </StyledSignUp>
    );
};

export default SignUp;