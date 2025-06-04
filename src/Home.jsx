import MiniPalette from "./MiniPalette"
import { NavLink } from "react-router-dom"
import { AnimatePresence } from "framer-motion";  // Import AnimatePresence
import Dialog from '@mui/material/Dialog';
import {
  Root,
  Container,
  Nav,
  Palettes
} from './styles/HomeStyles'

import { Avatar, DialogTitle, List, ListItem, ListItemAvatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useState } from "react";

export default function Home({seedColors,removePalette}){
  const [dialog_open,setDialogOpen] = useState(false);
  const [delete_id,setDeleteId] = useState("");

  function initiate_delete(){
    setDialogOpen(false);
    removePalette(delete_id);
    setDeleteId("");
  }

  return (
    <Root>
    <Container> 
    <Nav>
    <h1> Color Palettes </h1>
    <NavLink to='/palette/new' className = 'nav-link'> Create Palette </NavLink>
    </Nav>
    <Palettes>
    <AnimatePresence>
    {seedColors.map((palette) => (
      <MiniPalette 
      key={palette.id} 
      palette={palette} 
      removePalette={removePalette} 
      dialog_open={dialog_open}
      setDialogOpen={setDialogOpen}
      setDeleteId={setDeleteId}
      />
    ))}
    </AnimatePresence>    </Palettes>
    </Container>
    <Dialog open={dialog_open} aria-labelledby="delete-dialog-title" onClose={() => setDialogOpen(false)}>
    <DialogTitle id = "delete-dialog-title"> Delete this palette! </DialogTitle>
    <List> 
    <ListItem button style={{cursor: "pointer"}} onClick={initiate_delete}> 
    <ListItemAvatar>
    <Avatar style={{backgroundColor: blue[100],color: blue[600]}}> 
    <CheckIcon/> 
    </Avatar>
    </ListItemAvatar>
    Delete
    </ListItem>
    <ListItem button style={{cursor: "pointer"}} onClick={() => setDialogOpen(false)}>
    <ListItemAvatar>
    <Avatar style={{backgroundColor: red[100],color: red[600]}}> 
    <CloseIcon/> 
    </Avatar>
    </ListItemAvatar>
    Cancel
    </ListItem>
    </List>
    </Dialog>
    </Root>
  )
}
