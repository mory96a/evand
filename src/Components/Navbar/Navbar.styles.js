import styled from 'styled-components';
import { colors, breakPoints } from '../../styleSheets/index';

const StyledNavbar = styled.div`
  display: flex;

  @media(max-width: ${breakPoints.large}){
    display: none;
  }
`;

export default StyledNavbar;