import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';

export default function PaletteFloatingForm({handleChange,newPaletteName,PaletteList,hideForm,showEmoji,formOpen}){

  ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
    PaletteList.every(
      ({paletteName}) => paletteName.toLowerCase() !== newPaletteName.toLowerCase()
    )
  )

  function toggleEmoji(){
    hideForm();
    showEmoji();
  }

  return (
    <div>
    <Dialog
    open={formOpen}
    onClose={hideForm}
    >
    <ValidatorForm onSubmit={toggleEmoji}>
    <DialogTitle>Choose a Palette Name</DialogTitle>
    <DialogContent>
    <DialogContentText style={{marginBottom: "1rem"}}>
    Please enter a name for you palette. Make sure it's unique!
    </DialogContentText>
    <TextValidator value = {newPaletteName} label = "Palette Name" onChange={handleChange} name ="palette"
    validators={['required','isPaletteNameUnique']}
    errorMessages={['Empty names not allowed',"Duplicate names not allowed."]}
    fullWidth
    />
    </DialogContent>
    <DialogActions>
    <Button onClick={hideForm}>Cancel</Button>
    <Button variant='contained' color='info' type='submit' > Save Palette </Button>
    </DialogActions>
    </ValidatorForm>
    </Dialog>
    </div>
  );
}
