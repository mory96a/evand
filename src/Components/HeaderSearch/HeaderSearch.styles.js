import styled from 'styled-components';
import { colors, breakPoints } from '../../styleSheets/index';

const StyledHeaderSearch = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position:relative;
  z-index: 1;
  
  form {
    height: 100%;
    display: flex;
    border-left: 1px solid rgba(0,0,0,0.1);
    border-right: 1px solid rgba(0,0,0,0.1);
  }
  
  input {
    border: none;
    background:inherit;
    &:focus {
      outline: none;
    }
  }
  
  #button {
    border: none;
    background:inherit;
  }
  
  @media(max-width: ${breakPoints.large}){
    form {
      border: 0;
    }
    Button {
      border: none;
      background:inherit;
    }
    h2 {
      display: none;
    }
    width: 70px;
    input {
      display: none;
    }
    #show-input {
      width: 200px;
      justify-content: space-between;
      input {
       display: block;
      } 
    }
  }
`;

export default StyledHeaderSearch;