import styled from 'styled-components';
import { colors } from '../../styleSheets'

const StyledSideMenu = styled.div`
  width: 200px;
  height: 100vh;
  position:absolute;
  top : 70px;
  right: -10px;
  background:${colors.white};
  
  transform: translateX(200px);
  transition: all 0.3s ease-out;
`;

export default StyledSideMenu;