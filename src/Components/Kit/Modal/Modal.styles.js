import styled from 'styled-components';

const StyledModal = styled.div`
  position:fixed;
  z-index: 1000;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  display: ${props => !props.isOpen ? 'none' : 'flex'};
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`;

export const StyledContent = styled.div`
   position:absolute;
   top: -200px;
   
   #close-button {
     position: absolute;
     top: 5px;
     left: 10px;
     z-index:1000
   }
   
   animation: showForm 0.7s ease forwards;
   @keyFrames showForm {
     to {
       top: 70px;
     }
   }
`;

export default StyledModal;