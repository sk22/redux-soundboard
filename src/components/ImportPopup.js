import React from 'react'
import {connect} from 'react-redux'
import {resetShare, setImporting} from '../actions'
import TextField from './TextField'
import ToggleablePopup, {PopupButton} from './ToggleablePopup'
import {importSoundboard} from '../share'

const ShareImportPopup = (
  {importing, showImport, sounds, onImportRequest, onCloseRequest}
) => {
  let textField
  let setTextField = n => {
    textField = n
  }

  return (
    <ToggleablePopup show={showImport} onCloseRequest={onCloseRequest}>
      {importing ? <TextField disabled value="Importing..."/> : [
        <TextField
          type="text"
          placeholder="Import Key"
          innerRef={setTextField}
          key="0"
        />,
        <PopupButton onClick={() => {
          onImportRequest({sounds, id: textField.value})
        }} key="1">Import</PopupButton>
      ]}
    </ToggleablePopup>
  )
}

const mapStateToProps = ({current: {showImport, importing}, sounds}) => ({
  showImport, importing, sounds
})

const mapDispatchToProps = dispatch => ({
  onCloseRequest: () => dispatch(resetShare()),
  onImportRequest: async ({sounds, id}) => {
    dispatch(setImporting(true))
    await importSoundboard({dispatch, sounds, id})
    dispatch(resetShare())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShareImportPopup)
