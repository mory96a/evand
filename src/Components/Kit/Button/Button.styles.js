import styled from 'styled-components';
import { colors } from '../../../styleSheets';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    background:${props => colors[props.background]};
    color: ${props => colors[props.color]};
    padding: ${props => props.paddingX}px ${props => props.paddingY}px;
    &:focus {
      outline: 0;
    }
`;

export default StyledButton;