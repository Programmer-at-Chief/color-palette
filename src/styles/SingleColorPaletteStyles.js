import { styled } from "@mui/material";
import { NavLink } from "react-router-dom"
import sizes from "./sizes";

export const PaletteBox = styled('div')(() => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column"
}));

export const PaletteColors = styled('div')(() => ({
  height: "90%"
}));

export const GoBack = styled('div')(() => ({
  backgroundColor: "black",
  width: "20%",
  color: "black",
  height: "50%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  [sizes.down("lg")]: {
    width: "25%",
    height : '33.3333%'
  },
  [sizes.down('md')]: {
    width: '50%',
    height : '20%'
  },
  [sizes.down("xs")]: {
    width: "100%",
    height: '10%',
  },

}))

export const BackButton = styled(NavLink)(() => ({
  width: "100px",
  height: "30px",
  position: "absolute",
  display: "inline-block",
  top: "50%",
  left: "50%",
  marginLeft: "-50px",
  marginTop: "-15px",
  textAlign: "center",
  outline: "line",
  background: "rgba(255,255,255,0.3)",
  fontSize: "1rem",
  lineHeight: "20px",
  color: "white",
  textTransform: "uppercase",
  border: "none",
  paddingTop: "5px",
  textDecoration: "none",
}))


