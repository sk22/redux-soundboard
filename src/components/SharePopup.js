import styled from 'styled-components'
import Popup from './Popup'
import Button from './Button'

export const PopupButton = styled(Button)`
  margin-left: 1rem;
`

export default styled(Popup)`
  display: ${({show}) => show ? 'flex' : 'none'}
`
