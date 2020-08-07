import styled from 'styled-components';
import breakPoints from '../../config/breakPoints';

export const Cards = styled.div`
  margin: 3rem 0 3rem 0;
  @media(${breakPoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
  @media(${breakPoints.desktopM}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
  }
`;

export const Card = styled.article`
  background-color: ${(props) => props.theme.element};
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.38);
  border-radius: .3rem;
  margin-bottom: 4rem;
  max-width: 280px;
  cursor: pointer;

  @media(${breakPoints.tablet}) {
    max-width: 100%;
    margin-bottom: 0;
  }
`;

export const Informations = styled.div`
  padding: 20px;

  h1 {
    color: ${(props) => props.theme.text};
    font-size: 1.08em;
    font-weight: 800;
    line-height: 1.5rem;
  }

  p {
    color: ${(props) => props.theme.text};
    margin-top: 15px;
  
    margin-top: 30px;&:nth-child(2) {
      
    }

    strong {
      font-weight: 600;
    }

    span {
      margin-left: 5px;
      color: ${(props) => props.theme.text}
    }
  }
`;

export const Img = styled.img`
  max-width: 100%;
  min-height: 150px;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
  @media (${breakPoints.desktop}) {
    min-height: 180px;
  }


  @media (${breakPoints.desktopL}) {
    min-height: 200px;
  }
`;

export const ContryNotFound = styled.h1`
  color: ${(props) => props.theme.text};
  font-weight: 800;
  font-size: 1.2rem;
`;
