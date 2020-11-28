import styled from 'styled-components';

const StyledMultiSelectFilter = styled.div`
  position:relative;
  Button {
    border: none;
  }
  span {
    font-size: 14px;
  }
  #dropdown {
   max-height: 265px;
   overflow: auto;
  }
  label {
    z-index: 2;
  }
`;

export default StyledMultiSelectFilter;