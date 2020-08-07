import React from 'react';

import ContainerContent from './style';

function Container({ children }) {
  return (
    <ContainerContent>
      {children}
    </ContainerContent>
  );
}

export default Container;
