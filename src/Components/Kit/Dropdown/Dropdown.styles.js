import styled from 'styled-components';
import { colors } from '../../../styleSheets/index';

const StyledDropdown = styled.div`
  position:relative;
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
  top:50px;
  right: 0;
  z-index: 1;
  border : 1px solid ${colors.darkBlue};
  background:${colors.white};
  overflow: auto;
  max-height: 265px;
  min-width: 100%;
`;

export default StyledDropdown;