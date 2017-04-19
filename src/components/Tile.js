import styled from 'styled-components'

export default styled.div`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  height: 6rem;
  padding: 1rem;
  color: white;
  background: #444;
  margin: 0 1rem 1rem 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .15rem;
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`
