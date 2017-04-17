import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.span`
  line-height: 0;
  padding: .5rem;
  margin: .5rem;
  border-radius: 100%;
  cursor: pointer;
  &:active {
    background: #222;
  }
`

export default ({src, prefix = '', alt, ...props}) => (
  <StyledIcon {...props}>
    <img src={prefix + src} alt={alt || src}/>
  </StyledIcon>
)
