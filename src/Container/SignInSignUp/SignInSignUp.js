import React from "react";
import { connect } from 'react-redux';
import StyledSign from "./SignInSignUp.styles";
import { SignIn, SignUp } from '../../Components/';
import { loginUser } from "../../redux/modules/users/users";
import { Redirect } from "react-router-dom";

type Props = {};

const SignInSignUp = ({loginUser, user}) => {

    const userExist = !!user.data;

    if (userExist) {
        return <Redirect to='/events'/>;
    }
    return (
        <StyledSign>
            <SignIn loginUser={loginUser}/>
            <SignUp/>
        </StyledSign>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user
});

export default connect(mapStateToProps, {loginUser: loginUser})(SignInSignUp);