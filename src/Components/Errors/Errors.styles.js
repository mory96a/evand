import styled from 'styled-components';
import { colors } from '../../styleSheets';

const StyledErrors = styled.div`
  position:fixed;
  z-index: 10000;
  left: 50%;
  width: 350px; 
  margin-left:-175px;
  
  transform: translateY(-70px);
  display: ${props => !props.show ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid black;
  
  animation: message 1s ease forwards;
    @keyframes message {
      to {
       transform: translateY(0px);
     }
    }
    p {
      direction: rtl;
    }
`;

export default StyledErrors;