import styled from 'styled-components';
import { colors } from '../../../styleSheets';

const StyledDropdown = styled.div`
  position:absolute;
  right: 0;
  top: ${props => props.top}px;
  display: flex;
  flex-direction: column;
  background:${colors.white};
  border : 1px solid ${colors.darkBlue};
  z-index:1;
`;

export default StyledDropdown;