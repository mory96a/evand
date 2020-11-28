import styled from 'styled-components';
import { colors, breakPoints } from '../../styleSheets';

const StyledEvents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  
  @media(min-width: ${breakPoints.extraLarge}){
    width: 1180px;
  }
  
  @media(min-width: ${breakPoints.medium}) and (max-width: ${breakPoints.extraLarge}){
    width: 970px;
  }
  
  @media(min-width: ${breakPoints.medium}) and (max-width: ${breakPoints.large}){
    width: 750px;
  }
  @media(max-width: ${breakPoints.medium}){
    width: 90%  ;
  }
`;

export default StyledEvents;