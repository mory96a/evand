import styled from 'styled-components';
import { colors, breakPoints } from '../../styleSheets';

const StyledSignInSignUpAlert = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px ${colors.darkBlue} solid;
  padding: 20px;
  margin-top: 15px;
  
  Button {
      margin: 0 5px;
  }
  
  @media(max-width: ${breakPoints.medium}){
    display: flex;
    flex-direction: column;
    Button {
      width: 50%;
    }
    #button-wrapper{
      width: 100%;
      margin-top: 20px;
    }
  }
  
  @media(max-width: ${breakPoints.small}){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    Button {
      width: 100%;
      margin: 5px 0;
    }
  
    #button-wrapper{
      flex-direction: column;
      width: 100%;
    }
  }
`;

export default StyledSignInSignUpAlert;