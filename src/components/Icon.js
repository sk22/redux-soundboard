import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  display: inline-block;
  line-height: 0;
  padding: ${({compact}) => compact ? '.25rem' : '.5rem'};
  margin: ${({compact}) => compact ? '.25rem' : '.5rem'};
  border-radius: 100%;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  will-change: background;
  &:active {
    background: ${({active}) => active || 'rgba(0, 0, 0, 0.3)'};
  }
`

// Nesting because of border-radius
export default ({compact, active, ...props}) => (
  <Icon {...{compact, active}}><img alt={props.alt} {...props}/></Icon>
)
