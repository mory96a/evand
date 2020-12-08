import styled from 'styled-components';

const StyledSearchBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props=> props.height}px;
  width: ${props=> props.width}px;
`;

export default StyledSearchBox;