import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TextField from './TextField'
import Button from './Button'
import {addSound} from '../actions'

const LongButton = styled(Button)`
  width: 100%;
`

const Margin = styled.div`
  margin-bottom: 1rem;
`

const AddSound = ({match, dispatch}) => {
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
      // Since Link does not work this would be confusing
      // dispatch(addSoundToSoundboard({
      //   sound: getHighestKey(state.sounds),
      //   soundboard: match.params.soundboard
      // }))
    })
  }

  return (
    <div>
      <TextField type="text" id="name" placeholder="Name" innerRef={setName}/>
      <br/>
      <input type="file" ref={setFile}/><br/>
      <Margin/>
      <Link to={`/${match.params.soundboard}`}>
        <LongButton onClick={onSubmit}>Add</LongButton>
      </Link>
      <Margin/>
    </div>
  )
}

const mapStateToProps = state => ({state})

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(AddSound)
