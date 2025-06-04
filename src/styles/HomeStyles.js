import { styled } from "@mui/material/styles";
import sizes from "./sizes";

export const Root = styled('div')(() => ({
  backgroundColor:  "#330033",
  height:"100vh",
  display:"flex",
  alignItems:"flex-start",
  justifyContent:"center",
  backgroundImage: `url('/endless-constellation.svg')`,
  overflow: "scroll"
}));

export const Container = styled('div')(() => ({
  width:"70%",
  display:"flex",
  alignItems:"flex-start",
  flexDirection:"column",
  flexWrap:"wrap",

}));

export const Nav = styled('nav')(() => ({
  display:"flex",
  width:"100%",
  justifyContent:"space-between",
  color:"white",
  alignItems:"center",
  '& .nav-link':{
    color:"white",
    textDecoration: "none"
  },
  '& .nav-link:hover':{
    borderBottom: "2px solid white",
    paddingBottom: "2px"
  },
  '& h1':{
    fontSize: "2rem"
  }

}));

export const Palettes = styled('div')(() => ({
  boxSizing:"border-box",
  width:"70vw",
  display:"grid",
  marginBottom: "7rem",
  gridTemplateColumns:"repeat(3,30%)",
  gridGap:"3%",
  [sizes.down("lg")]:{
    gridTemplateColumns:"repeat(2,50%)",
    gridGap: "2%",
  marginBottom: "7rem",
  },
  [sizes.down("xs")]:{
    gridTemplateColumns:"repeat(1,100%)",
    gridGap: "1%",
  marginBottom: "15rem",
  },
  // overflow: "scroll"
}));


