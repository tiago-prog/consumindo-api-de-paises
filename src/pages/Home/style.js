import styled from 'styled-components';
import breakPoints from '../../config/breakPoints';

const ColunmAndRow = styled.div`
  @media (${breakPoints.desktop}) {
    display: flex;
    justify-content: space-between;
  }
`;

export default ColunmAndRow;
