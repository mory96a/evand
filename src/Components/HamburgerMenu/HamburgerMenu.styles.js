import styled from 'styled-components';
import {breakPoints} from '../../styleSheets';

const StyledHamburgerMenu = styled.div`
  display: none;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  width: 60px;
  margin: 0 10px;
  position:relative;
  
  #icon {
    z-index: 1;
  }
 
  @media(max-width: ${breakPoints.large}){
    display: flex;
    align-items: center;
    #show-side-menu {
      transform: translateX(0);
      transition: all 0.3s ease-out;
    }
  }
`;

export default StyledHamburgerMenu;