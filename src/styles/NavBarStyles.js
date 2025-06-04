import { styled } from '@mui/material';
import sizes from './sizes'

export const NavBarStyle = styled('header')(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "6vh",
}))

export const Logo = styled('div')(() => ({
  marginRight: "15px",
  padding: "0px 13px",
  fontSize: "22px",
  backgroundColor: "#eceff1",
  fontFamily: "Roboto",
  height: "100%",
  display: "flex",
  alignItems: "center",
  '& a':{
    textDecoration: "none",
    color: "black"
  },
  [sizes.down("xs")]:{
    display: "none"
  }

}))

export const SliderStyle = styled('div')(() => ({
  width: "340px",
  margin: "0px 10px",
  display: "inline-block",
  '& .rc-slider-rail':{
    height: "8px" 
  },
  '& .rc-slider-track':{
  backgroundColor: "transparent"
  },
  '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus':{
  backgroundColor: "green ",
  outline: "none !important",
  border: "2px solid green !important",
  boxShadow: "none !important",
  width: "13px",
  height: "13px",
  marginLeft: "-7px",
  marginTop: "-3px",
  },
  [sizes.down("sm")]:{
    width: "150px"
  }
}))

export const SelectContainer = styled('div')(() => ({
  marginLeft: "auto",
  marginRight: "1rem",
  height: "90%",
  marginBottom: "1rem"
}))

