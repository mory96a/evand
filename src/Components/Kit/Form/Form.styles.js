import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: ${props=> props.height}px;
  width: ${props=> props.width}px;
`;

export default StyledForm;