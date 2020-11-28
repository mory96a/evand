import styled from 'styled-components';
import { Link } from "react-router-dom";
import { colors } from '../../../styleSheets/'

export const StyledLink = styled(Link)`
    text-decoration: none !important;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => colors[props.color]};
`;

export const StyledAnchor = styled.a`
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
`;
