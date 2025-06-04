import { styled } from "@mui/material";
import sizes from "./sizes";

export const Root = styled("div")(() => ({
  width: "20%",
  height: "25%",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-4.5px",
  [sizes.down("lg")]:{
    width: "25%",
    height: "20%"
  },
  [sizes.down("md")]:{
    width: "50%",
    height: "10%"
  },
  [sizes.down("sm")]:{
    width: "100%",
    height: "5%"
  }
}));

// export const BoxContent = styled("div")(() => ({
export const BoxContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isLight',
})(({ isLight }) => ({

  position: "absolute",
  padding: "10px",
  width: "100%",
  bottom: "0px",
  left: "0px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
  // color: "rgba(0,0,0,0.5)",
  color : isLight ? "black" : "white",
  "& .icon": {
    // color: "black",
    transition: "transform 0.3s ease",
  },
  "& .icon:hover": {
    transform: "scale(1.5)",
    color: "white",
  },
}));

