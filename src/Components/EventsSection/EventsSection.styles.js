import styled from 'styled-components';

const StyledEventsSection = styled.div`
  display: flex;
  max-width: 265px;
  flex-direction: column;
  padding: 0;
  border : 2px solid rgba(0,0,0,0.1);

  #logo-image {
     width: 32px;
     height: 32px;
  }
  
  #section-content {
    height: 53%;
  }
  
  #cover {
    height: 42%;
  }
`;

export default StyledEventsSection;