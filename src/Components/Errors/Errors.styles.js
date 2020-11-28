import styled from 'styled-components';

const StyledErrors = styled.div`
  position:fixed;
  transform: translateY(-700px);
  display: ${props=> !props.show && 'none'};
  padding: 20px;
  border: 1px solid black;
  
  animation: message 1s ease forwards;
    @keyframes message {
      to {
       transform: translateY(-200px);
     }
    }
    p {
      direction: rtl;
    }
`;

export default StyledErrors;