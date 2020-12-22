import styled from 'styled-components';
import { colors, breakPoints } from '../../styleSheets';

const StyledFiltersForm = styled.div`
  margin-top: 60px;
  border : 1px solid rgba(0,0,0,0.1);
  border-top: 5px solid ${colors.darkBlue};
  width: 100%;
  font-size: 14px;

  #search-box {
    input {
      height: 40px;
    }
  }
  
  .container {
    padding: 25px;
  }
  
  .sort-by{
    width: 130px;
  }
  Button {
    border:none;
  }
  
  input {
    padding:0 10px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
  }
`;

export default StyledFiltersForm;