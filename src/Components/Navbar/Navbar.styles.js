import styled from 'styled-components';
import { colors, breakPoints } from '../../styleSheets/index';

const StyledNavbar = styled.div`
  display: flex;
  direction: rtl;
  font-size:  14px; 

  @media(max-width: ${breakPoints.large}){
    display: none;
  }
`;

export default StyledNavbar;