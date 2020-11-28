import styled from 'styled-components';
import {colors } from '../../../styleSheets';

const StyledCard = styled.div`
    background: ${props => props.color};
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    border: ${props => props.border}px solid ${colors.black};
`;

export default StyledCard;
