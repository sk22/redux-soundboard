import styled from 'styled-components'

export default styled.a`
  border-bottom: .08rem solid white;
  transition: all .3s cubic-bezier(.25,.8, .25, 1);
  will-change: background-color, border-bottom-color, color;

  &:hover {
    border-bottom-color: none;
    background: white;
    color: #222;
  }
`
