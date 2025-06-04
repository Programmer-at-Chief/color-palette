import * as React from 'react';
import { ChromePicker } from 'react-color';
import { Button, styled } from '@mui/material';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';

const Picker = styled(ChromePicker)(() => ({
  width: "100% !important",
  marginTop: "2rem",
  marginBlock: "1rem"
}))

const AddColor = styled(Button)(() => ({
  width: "100%",
  padding: "1rem",
  fontSize: "1rem",
  marginTop: "1rem"
}))

const ColorNameInput = styled(TextValidator)(() => ({
  width: "100%",
  height: "50%",
  lineHeight: "0",
  '& .MuiInputBase-input': { padding: '10px' }
}))

export default function ColorPickerForm({colorList,currentColor,addNewColor,handleChange,newName,paletteFull,updateColor}){

  ValidatorForm.addValidationRule('isColorNameUnique', value => 
    colorList.every(
      ({name}) => name.toLowerCase() !== value.toLowerCase()
    )
  )

  ValidatorForm.addValidationRule('isColorUnique', value => 
    colorList.every(
      ({color}) => color.toLowerCase() !== currentColor.toLowerCase()
    )
  )

  return (
    <div>
    <Picker color={currentColor} onChangeComplete={(newColor) => updateColor(newColor)}/>
    <ValidatorForm onSubmit={addNewColor} instantValidate= {false}>
    <ColorNameInput value={newName} onChange={handleChange} name = "color" 
    validators={["required","isColorNameUnique","isColorUnique"]}
    errorMessages={["this field is required","Color Name must be unique","Color must be unique"]}
    variant="filled"
    placeholder='Color Name'
    />
    <AddColor variant='contained' color='secondary' style={{backgroundColor: paletteFull?"grey": currentColor}}  type='submit' disabled = {paletteFull} > {paletteFull?"Palette is Full":"Add Color"} </AddColor> 
    </ValidatorForm>

    </div>
  )
}
