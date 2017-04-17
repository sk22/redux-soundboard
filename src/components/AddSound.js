import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import TextField from './TextField'
import Button from './Button'
import {addSound} from '../actions'

const BottomMargin = styled.div`
  margin-bottom: 1rem;
`

const AddSound = ({dispatch}) => {
  let name
  let file

  const setName = n => {
    name = n
  }

  const setFile = n => {
    file = n
  }

  const onSubmit = e => {
    e.preventDefault()
    const reader = new FileReader()
    if (file && file.files.length) {
      reader.readAsDataURL(file.files[0])
    }
    reader.addEventListener('load', () => {
      dispatch(addSound({name: name.value || 'Unnamed', src: reader.result}))
    })
  }

  return (
    <div>
      <TextField type="text" id="name" placeholder="Name" innerRef={setName}/>
      <br/>
      <input type="file" ref={setFile}/><br/>
      <BottomMargin/>
      <Button onClick={onSubmit}>Add</Button>
    </div>
  )
}

export default connect()(AddSound)
