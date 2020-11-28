import styled from 'styled-components';
import { breakPoints } from '../../styleSheets';

export const StyledDiv = styled.div`
  height: 100%;
  width: 45%;
  padding: 20px;
  direction: rtl;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledSlide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  img{
    width: 50%;
  }
  
   @media(max-width: ${breakPoints.medium}) and (min-width: ${breakPoints.small}){
     flex-direction: column;
     justify-content: center;
     height: 500px;
     img {
      order:-2;
      width: 90%;
      height: 60%;
     }
     ${StyledDiv} {
      width: 100%;
      height: 40%;
     }
   }
   
   @media(max-width: ${breakPoints.small}){
     flex-direction: column;
     justify-content: center;
     height: 410px;
      img {
      order:-2;
      width: 90%;
      height: 50%;
     }
     ${StyledDiv} {
      width: 100%;
      height: 50%;
     }
   }
`;

export default StyledSlide;