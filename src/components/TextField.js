import styled from 'styled-components'

export default styled.input`
  display: block;
  width: 100%;
  height: 3rem;
  padding-left: .5rem;
  color: white;
  font-size: 1.25rem;
  background: #333;
  border: none;
  
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`
