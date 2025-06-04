import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { drawerWidth,Main,DrawerHeader,DrawerContainer,Buttons } from './styles/NewPaletteFormStyles';
import Dialog from '@mui/material/Dialog';
import { Avatar, DialogTitle, List, ListItem, ListItemAvatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import { useParams } from 'react-router-dom';

import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';
import { useRef } from 'react';


export default function PaletteEditForm({PaletteList,setPalettesList}){
  const { palette_id } = useParams();
  const maxColors = 20;
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [currentColor,setcurrentColor] = useState('teal');
  const palette = PaletteList.find(palette => palette.id === palette_id);

  if (!palette) {
    navigate('/');
  }

  const [colorList,setColorList] = useState(palette.colors)
  const [newName,setnewName] = useState("")
  const [newPaletteName,setNewPaletteName] = useState(palette.paletteName)
  const [saved,setSaved] = useState(true)
  const [saved_dialog,setSavedDialog] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setSaved(false);
  }, [colorList]);

  const updateColor = (newColor) => {
    setcurrentColor(newColor.hex);
    setSaved(false);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (evt) => {
    const {name,value} = evt.target
    if (name === "palette") setNewPaletteName(value)
    else if (name === "color") setnewName(value)
  }

  const addNewColor = () => {
    setColorList((prevColors) => [...prevColors,{color: currentColor,name : newName}]);
    setSaved(false);
  }

  const handleSave = (emoji) => {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, '-'),
      emoji: emoji,
      colors: colorList
    };

    const updatedPalettes = PaletteList.filter(p => p.id !== palette.id);

    const newPalettesList = [...updatedPalettes, newPalette];

    setPalettesList(newPalettesList);

    setSaved(true);
    navigate('/');
  };

  const deleteColor =(name) => {
    setColorList(colorList.filter((color) => color.name !== name))
    setSaved(false);
  }

  const clearPalette = () => {
    setColorList([])
    setSaved(false);
  }

  const addRandomColor =() => {
    let palette_num = Math.floor(Math.random()* PaletteList.length)
    let color_num = Math.floor(Math.random() * PaletteList[palette_num].colors.length)
    let new_color = PaletteList[palette_num].colors[color_num]
    while (colorList.some(color => color.name === new_color.name)) {
      palette_num = Math.floor(Math.random()* PaletteList.length)
      color_num = Math.floor(Math.random() * PaletteList[palette_num].colors.length)
      new_color = PaletteList[palette_num].colors[color_num]
    }
    setColorList(prevColors => ([...prevColors,new_color]))
    setSaved(false);
  }

  const GoBack =() => {
    navigate('/')
  }

  const paletteFull = colorList.length >= maxColors

  return (
    <div>
    <Box sx={{ display: 'flex' ,overflow:"hidden",height: "100vh"}}>
    <PaletteFormNav open ={open} handleDrawerOpen = {handleDrawerOpen} handleSave={handleSave} newPaletteName={newPaletteName} handleChange={handleChange} GoBack={GoBack} PaletteList={PaletteList} saved={saved} setSavedDialog={setSavedDialog}/>
    <Drawer
    sx={{
      width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
    }}
    variant="persistent"
    anchor="left"
    open={open}
    >
    <DrawerHeader>
    <IconButton onClick={handleDrawerClose}>
    <ChevronLeftIcon />
    </IconButton>
    </DrawerHeader>
    <DrawerContainer>
    <Typography variant='h4'> Design your Palette </Typography>
    <Buttons>
    <Button variant='contained' color='error' onClick={clearPalette} > Clear Palette </Button> 
    <Button variant='contained' color='primary' disabled = {paletteFull} onClick={addRandomColor}> Random Color </Button> 
    </Buttons>
    <ColorPickerForm colorList={colorList} currentColor={currentColor} addNewColor={addNewColor} handleChange={handleChange} newName={newName} paletteFull={paletteFull} updateColor={updateColor}/>
    </DrawerContainer>

    </Drawer>
    <Main open={open}>
    <DrawerHeader />
    <DraggableColorList colorList={colorList} deleteColor={deleteColor} setColorList={setColorList}/>
      </Main>
    </Box>
    <Dialog open={saved_dialog} aria-labelledby="delete-dialog-title" onClose={() => setSavedDialog(false)}>
    <DialogTitle id = "delete-dialog-title"> Continue without saving! </DialogTitle>
    <List> 
    <ListItem button="true" style={{cursor: "pointer"}} onClick={GoBack}> 
    <ListItemAvatar>
    <Avatar style={{backgroundColor: blue[100],color: blue[600]}}> 
    <CheckIcon/> 
    </Avatar>
    </ListItemAvatar>
    Go Back
    </ListItem>
    <ListItem button="true" style={{cursor: "pointer"}} onClick={() => setSavedDialog(false)}>
    <ListItemAvatar>
    <Avatar style={{backgroundColor: red[100],color: red[600]}}> 
    <CloseIcon/> 
    </Avatar>
    </ListItemAvatar>
    Cancel
    </ListItem>
    </List>
    </Dialog>
    </div>
  )

}
