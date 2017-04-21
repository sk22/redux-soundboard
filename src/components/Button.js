import styled from 'styled-components'

const Button = styled.button`
  display: block;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  border: none;
  background: #444;

  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export default Button
