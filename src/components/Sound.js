import React from 'react';
import styled from 'styled-components';

const StyledSound = styled.div`
  width: 7rem;
  height: 7rem;
  padding: 1rem;
  margin: 1rem 0 0 1rem;
  color: white;
  background: #444;
`;

export default ({item}) => (
  <StyledSound>
    <h2>{item.title}</h2>
    <audio src={item.src} />
  </StyledSound>
);
