import { styled } from "@mui/material/styles";

export const Root = styled('div')(() => ({
  backgroundColor: "white",
  borderRadius : "5px",
  padding: "0.5rem",
  position: "relative",
  overflow: "hidden",
  border:"1px solid black",
  height: "13rem",
  cursor:"pointer",
  "&:hover svg":{
    opacity: "1"
  },
}));

export const Title = styled('h5')(() => ({
  display:"flex",
  justifyContent : "space-between",
  alignItems:"center",
  margin:"0px",
  color:"black",
  paddingTop:"0.5rem",
  fontSize:"1.2rem",
  position: "relative",
}))

export const Colors = styled('div')(() => ({
  backgroundColor : "#dae1e4",
  height:"150px",
  width:"100%",
  borderRadius:"5px",
  overflow:"hidden"
}));

export const Emoji = styled('span')(() => ({
  marginLeft:"0.5rem",
  fontSize: "1.5rem",
}));

export const MiniColor = styled('div')(() => ({
  height:"25%",
  width:"20%",
  display:"inline-block",
  margin:"0 auto",
  position: "relative",
  marginBottom: "-4.6px"

}));

export const Delete = styled('div')(() => ({
  '& .deleteicon':{
  color: "white",
  backgroundColor: "#eb3b30",
  width: "25px",
  height: "25px",
  position: "absolute",
  right: "0px",
  top: "0px",
  padding: "10px",
  zIndex: "10",
  opacity: "0",
  transition: "all 0.3s ease-in-out"
}
}))

export const Edit = styled('div')(() => ({
  '& .editicon':{
  color: "white",
  backgroundColor: "green",
  width: "25px",
  height: "25px",
  position: "absolute",
  left : "0px",
  top: "0px",
  padding: "10px",
  zIndex: "10",
  opacity: "0",
  transition: "all 0.3s ease-in-out"
}
}))
