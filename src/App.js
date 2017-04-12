import React from 'react';
import styled from 'styled-components';
import Toolbar from './components/Toolbar';
import Sounds from './components/Sounds';

const StyledApp = styled.div`
  background: #111;
  min-height: 100vh;
`;

export default (
  <StyledApp>
    <Toolbar name="hi" />
    <Sounds />
  </StyledApp>
);
