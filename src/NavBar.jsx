import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import { IconButton, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  NavBarStyle,
  SliderStyle,
  Logo,
  SelectContainer
} from './styles/NavBarStyles'

export default function NavBar({level,changeLevel,handleChange,format,slide}){
  const [open,setOpen] = useState(false)

  function closeSnackbar(){
    setOpen(false)
  }

  function formatChange(evt){
    setOpen(true);
    handleChange(evt);
  }

  return (
    <NavBarStyle>
    <Logo>
    <a href="/color-palette/"> Color Palette </a>
    </Logo>
    {slide ? <div>
    <span> Level : {level} </span>
     <SliderStyle>
    <Slider defaultValue={level} min={100} max={900} onChangeComplete={changeLevel} step={100}/>
    </SliderStyle>     
    </div>: null }

    <SelectContainer> 
    <Select onChange={formatChange} value={format}>
    <MenuItem value="hex" > HEX - #ffffff </MenuItem>
    <MenuItem value="rgb" > RGB - rgb(255,255,255)</MenuItem>
    <MenuItem value="rgba" > RGBA - rgba(255,255,255,1.0)</MenuItem>
    </Select> 
    </SelectContainer>
    <Snackbar 
    anchorOrigin={{vertical:"bottom", horizontal:"left"}} 
    open={open} 
    autoHideDuration={3000}
    message={<span id="message"> Format Changed! </span>}
    ContentProps={{
      "aria-describedby" : "message-id"
    }}
    onClose={closeSnackbar}
    action={[
      <IconButton onClick={closeSnackbar} color='inherit' key={close}>
        <CloseIcon />
      </IconButton>
    ]}
    />

    </NavBarStyle>
  )
}
