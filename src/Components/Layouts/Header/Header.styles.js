import styled from 'styled-components';
import { colors, breakPoints } from '../../../styleSheets';

const StyledHeader = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    height: 70px;
    width: 100vw;
    background:${colors.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    justify-content: space-between;
    z-index: 1;
   
    #header-h1 {
      display: none;
    }
    div {
      margin: 0 auto;
    }
       
    @media(max-width: ${breakPoints.large}){
       div {
         margin: 0;
       }
       #input-header{
         display: none;
       }
       #header-h1 {
         display: block;
       }
    }
`;

export default StyledHeader;
