import React from 'react';
import StyledButton from "./Button.styles";
import { Colors } from '../../../styleSheets';

type buttonProps = {
    height?: number | string,
    width?: number | string,
    paddingX?: number | string,
    paddingY?: number | string,
    background?: string,
    children: Element,
    color?: string
};

type Props = buttonProps & Colors;

const Button = ({children, ...restPros}: Props) => {
    return (
        <StyledButton {...restPros}>
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    paddingX: 10,
    paddingY: 5,
    color: 'black',
};

export default Button;

