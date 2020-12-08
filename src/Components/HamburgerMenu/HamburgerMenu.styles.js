import styled from 'styled-components';
import {breakPoints} from '../../styleSheets';

const StyledHamburgerMenu = styled.div`
  display: none;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  width: 70px;
  margin: 0 10px;
  position:relative;
  
  input {
    height: 70px;
    width: 70px;
    position:absolute;
    top: 0;
    right: 0;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
  }
  
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