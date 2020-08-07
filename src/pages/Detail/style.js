import styled from 'styled-components';
import breakPoints from '../../config/breakPoints';

export const Details = styled.div`
  margin: 4rem 0;

  a {
    text-decoration: none;
  }
`;

Details.Back = styled.button` 
  text-decoration: none;
  display: block;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.element};
  padding: .6rem 1.6rem;
  margin-bottom: 5rem;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.38);
  border-radius: .3rem;
  font-weight: 400;

  @media (${breakPoints.desktop}) {
    padding: .4rem 1.5rem;
  }
`;

Details.Back.Icon = styled.i`
  margin-right: .5rem; 
  font-size: 1rem;
`;

Details.Content = styled.main`
  @media (${breakPoints.tabletL}) {
    display: inline-flex;
    align-items: center;
  }
`;

export const Flag = styled.img`
  width: 100%;
  max-width: 28rem;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.38);
  @media (${breakPoints.tabletL}) {
    margin-right: 5rem;
  }
`;

export const Group = styled.article`
  @media (${breakPoints.tabletL}) {
    display: flex;
    flex-direction: column;
  }
`;

Group.Title = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  font-weight: 800;
  margin: 2.2rem 0;
  @media (${breakPoints.tabletL}) {
    margin: 0 0 1.2rem 0;
  }
`;

Group.Items = styled.div`
  @media (${breakPoints.tabletL}) {
    display: flex;
    justify-content: space-between;
    width: 32rem;
  }
`;

Group.BorderContries = styled.div`
  margin-top: 2.2rem;
  @media (${breakPoints.tabletL}) {
    display: flex;
    align-items: center;  
    flex-wrap: wrap;
  }
`;

Group.BorderContries.Title = styled.h3`
  color: ${(props) => props.theme.text};
  font-weight: 600;
  @media (${breakPoints.tabletL}) {
    margin-right: .8rem;
    margin-bottom: .8rem;
  }
`;

export const BorderCountry = styled.span`
  display: inline-flex;
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  padding: .5rem .8rem;
  margin-top: 1rem;
  border-radius: .2rem;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.38);


  &:not(:last-child) {
    margin-right: .8rem;
  }

  @media (${breakPoints.tabletL}) {
    margin-top: 0;
    margin-bottom: 10px;    
    font-size: .9rem;
    padding: .3rem .8rem;
  }
`;

export const Item = styled.strong`
  display: block;
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin: 1.5rem 10px 1.5rem 0;

  span {
    font-weight: 400;
    &:not(:last-child)::after {
      content: ", ";
    }
  }
`;
