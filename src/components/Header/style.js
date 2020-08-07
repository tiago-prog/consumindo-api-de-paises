import styled from 'styled-components';
import breakPoints from '../../config/breakPoints';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${breakPoints.tabletL}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 64rem;
  }
`;

export const Heading = styled.header`
  background-color: ${(props) => props.theme.element};
  padding: 25px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.38);

`;

Heading.Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-weight: 800;
  font-size: 1.2em; 
  margin-bottom: 15px;
  @media (${breakPoints.tabletL}) {
    margin-bottom: 0; 
  }
`;

export const MoonIcon = styled.button`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  span {
    font-weight: 600;
    margin-left: 10px;
  }

`;
