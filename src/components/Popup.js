import React from 'react'
import styled from 'styled-components'

const StyledPopup = styled.aside`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: #222;
`

const Close = styled.img`
  float: right;
`

export default ({children, onCloseRequest}) => (
  <StyledPopup>
    {children}
    <Close src="/icons/close.svg" alt="close" onClick={onCloseRequest}/>
  </StyledPopup>
)
