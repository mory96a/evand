import styled from 'styled-components';
import { breakPoints } from '../../styleSheets';

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  height: 60vh;
  text-align: center;
  
  @media(max-width: ${breakPoints.medium}){
    font-size: 60px;
    height: 40vh;
  }
`;

export default StyledHome;