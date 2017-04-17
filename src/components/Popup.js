import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const StyledPopup = styled.aside`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  padding-right: 0;
  background: #222;
`

const Content = styled.div`
  display: flex;
  flex: 1;
`

export default ({children, onCloseRequest, ...props}) => (
  <StyledPopup {...props}>
    <Content>{children}</Content>
    <Icon
      compact
      prefix={process.env.PUBLIC_URL + '/icons/'}
      src="close.svg"
      alt="close"
      active="none"
      onClick={onCloseRequest}
    />
  </StyledPopup>
)
