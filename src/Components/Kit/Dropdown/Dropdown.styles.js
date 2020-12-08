import styled from 'styled-components';
import { colors } from '../../../styleSheets/index';

const StyledDropdown = styled.div`
  position:relative;
  
  transition: transform 0.5s ease;
  
  #rotate-icon {
    transform: rotate(${props => props.isOpen ? 180 : 0}deg);
    transition: transform 0.5s ease;
  }
  
  label {
    z-index: 2;
  }
  span {
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top:${props => props.top}px;
  right: 0;
  z-index: 1;
  border : 1px solid ${colors.darkBlue};
  background:${colors.white};
  max-height: ${props => props.maxHeight}px;
  overflow: auto;
  min-width: 100%
`;

export default StyledDropdown;