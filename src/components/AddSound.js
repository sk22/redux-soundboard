import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {addSound} from '../actions'

const FormContent = styled.div`
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
    <form onSubmit={onSubmit}>
      <FormContent>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" id="name" ref={setName}/></td>
            </tr>
            <tr>
              <td><label htmlFor="file">File</label></td>
              <td><input type="file" ref={setFile}/></td>
            </tr>
          </tbody>
        </table>
      </FormContent>
      <input type="submit"/>
    </form>
  )
}

export default connect()(AddSound)
