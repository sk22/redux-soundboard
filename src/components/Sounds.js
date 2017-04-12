import React from 'react';
import styled from 'styled-components';
import Sound from './Sound';

const StyledSounds = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledPlus = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  margin: 1rem 0 0 1rem;
  color: white;
  background: #444;
  color: #111;
  font-size: 5rem;
`;

export default ({items = [], locked = false}) => (
  <StyledSounds>
    {items.map(item => <Sound item={item} />)}
    {!locked && <StyledPlus>+</StyledPlus>}
  </StyledSounds>
);
