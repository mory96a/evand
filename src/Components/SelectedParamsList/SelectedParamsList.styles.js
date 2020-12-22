import styled from 'styled-components';
import { colors } from '../../styleSheets';

const StyledSelectedParamsList = styled.div`
  width: 100%;
  min-height: 50px;
  border : 1px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding:20px;
  flex-wrap: wrap;
`;

export const StyledOption = styled.div`
  background:${colors.darkBlue};
  display: flex;
  justify-content: space-between;
  border : 1px solid rgba(0,0,0,0.1);
  padding: 2px 15px;
  cursor: pointer;
`;

export default StyledSelectedParamsList;