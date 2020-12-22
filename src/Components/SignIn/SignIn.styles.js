import styled from 'styled-components';
import { colors, breakPoints } from '../../styleSheets';

const StyledSignIn = styled.div`
  background: ${colors.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  
   #button-list {
    width: 30%;
  }
  
  #form-wrapper {
    width: 65%;
  }
  
  form {
    width: 100%;
    border-bottom: 1px solid ${colors.lighterGray};
  }
  
  @media(max-width: ${breakPoints.medium}){
    #button-list {
      width: 100%;
      height: 45%;
    }
    #form-wrapper {
      width: 100%;
      height: 45%;
    }
  }
  
  @media(min-width: ${breakPoints.medium}){
    width: 760px;
    height: 300px;
  }
  
  @media(min-width: ${breakPoints.small}) and (max-width: ${breakPoints.medium}){
    width: 560px;
    height: 70vh;
  }
  
  @media(max-width: ${breakPoints.small}){
    width: 100vw;
    height: 70vh;
  }
`;

export default StyledSignIn;