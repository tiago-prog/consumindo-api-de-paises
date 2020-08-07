import styled from 'styled-components';
import breakPoints from '../../config/breakPoints';

export const SearchContainer = styled.div`
  margin-top: 2rem;
  position: relative;
`;

export const Input = styled.input`
  padding: .8rem;
  padding-left: 3.5rem; 

  width: 100%;
  max-width: 530px;
  border-radius: .3rem;
  font-weight: 400;

  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.38);

  &:focus {
    outline: none;
  }

  &::placeholder { 
    color: ${(props) => props.theme.text};
  }

  @media(${breakPoints.tabletL}) {
    width: 33.125rem;
  }
`;

export const SearchIcon = styled.i`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  top: 30%;
  left: 1.2rem;
`;
