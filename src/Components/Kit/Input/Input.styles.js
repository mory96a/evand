import styled from 'styled-components';
import { colors } from '../../../styleSheets/';

const StyledInput = styled.input`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  border: ${props => props.borderSize}px solid ${props => colors[props.borderColor]};
  &:focus {
    outline: ${colors.black}  ;
  } 
`;

export default StyledInput;