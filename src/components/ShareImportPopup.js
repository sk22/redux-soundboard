import React from 'react'
import {connect} from 'react-redux'
import {resetShare, setImporting} from '../actions'
import TextField from './TextField'
import SharePopup, {PopupButton} from './SharePopup'
import {importSoundboard} from '../share'

const ShareImportPopup = (
  {state, importing, showImport: show, onImportRequest, onCloseRequest}
) => {
  let urlField
  let setUrlField = n => {
    urlField = n
  }

  return (
    <SharePopup show={show} onCloseRequest={onCloseRequest}>
      {importing ? <TextField disabled value="Importing..."/> : [
        <TextField
          type="url"
          placeholder="Import URL"
          innerRef={setUrlField}
          key="0"
        />,
        <PopupButton onClick={() => {
          onImportRequest({state, url: urlField.value})
        }} key="1">Import</PopupButton>
      ]}
    </SharePopup>
  )
}

const mapStateToProps = state => ({...state.current, state})

const mapDispatchToProps = dispatch => ({
  onCloseRequest: () => dispatch(resetShare()),
  onImportRequest: async ({state, url}) => {
    dispatch(setImporting(true))
    await importSoundboard({state, url, dispatch})
    dispatch(resetShare())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShareImportPopup)
