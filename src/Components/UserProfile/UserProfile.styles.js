import styled from 'styled-components';
import { breakPoints } from '../../styleSheets';

const StyledUserProfile = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  
  span {
    display: inline-block;
    white-space: nowrap; 
    max-width: 200px; 
    overflow: hidden;
    text-overflow: ellipsis; 
  }
  @media(max-width: ${breakPoints.extraLarge}) and (min-width: ${breakPoints.large}){
    span {
      max-width: 60px;
    }
  }
  
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;

export default StyledUserProfile;
