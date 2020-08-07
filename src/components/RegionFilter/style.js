import styled from 'styled-components';

export const SelectContainer = styled.div`
  margin-top: 2rem;
  display: inline-block;
  position: relative;

  ${(props) => (props.selectToggle === 'true' ? `
    &:after {
      content: "";
      display: block;
    
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  ` : '')}
`;

export const Select = styled.div`
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};

  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.38);
  border-radius: .3rem;
  font-weight: 400;

  width: 11rem;
  padding: 1rem 1.4rem;

  span {
    user-select: none;
  }

`;

Select.Icon = styled.i`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const SelectOptions = styled(Select)`
  position: absolute;
  z-index: 1;
  margin-top: .5rem;
  transition: opacity 600ms, visibility 600ms;
  opacity: ${(props) => (props.opacity === 'true' ? 1 : 0)};
  visibility: ${(props) => (props.visibility === 'true' ? 'visible' : 'hidden')};


`;

SelectOptions.Item = styled.option`
  user-select: none;
  display: block;
  cursor: pointer;
  padding: 10px;
  
  &:hover {
    background-color: rgba( 0,0,0, 0.4)
  }
`;
