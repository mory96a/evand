import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../Container/Home/Home";
import { Header, Errors } from "../Components";
import Events from "../Container/Events/Events";
import SignInSignUp from "../Container/SignInSignUp/SignInSignUp";
import styled from 'styled-components';

const Div = styled.div`
  margin-top:70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Routes = () => {
    return (
        <div>
            <Header/>
            <Errors/>
            <Div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/events' component={Events}/>
                    <Route exact path='/signin' component={SignInSignUp}/>
                    <Route exact path='/signup' component={SignInSignUp}/>
                </Switch>
            </Div>
        </div>
    );
};

export default Routes;