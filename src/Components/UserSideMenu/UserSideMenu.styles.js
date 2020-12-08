import styled from 'styled-components';

const StyledUserSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13px;
  img {
    width: 20px;
    height: 20px;
  }
  a {
    font-size: 14px;
  }
  #border-div {
    width:100% ;
    border-bottom: 1px solid rgba(0,0,0,.1);;
  }
`;

export default StyledUserSideMenu;