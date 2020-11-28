import styled from 'styled-components';
import { colors } from '../../../styleSheets';

const StyledIcon = styled.i`
    font-size: ${props => props.size}px;
    color: ${props => colors[props.color]}
`;

export default StyledIcon