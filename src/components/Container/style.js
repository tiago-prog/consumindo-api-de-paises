import styled from 'styled-components';
import breakPoints from '../../config/breakPoints';

const ContainerContent = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  @media(${breakPoints.desktop}) {
    max-width: 64rem;
  }
`;

export default ContainerContent;
