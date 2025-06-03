import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button, DialogTitle } from '@mui/material';
import PaletteFloatingForm from './PaletteFloatingForm';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { Root,AppBar,NavButtons } from './styles/PaletteFormNavStyles';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export default function PaletteFormNav({open,handleDrawerOpen,handleSave,newPaletteName,handleChange,GoBack,PaletteList,saved,setSavedDialog}){
  const [formOpen,setFormOpen] = useState(false)
  const [emojiOpen, setEmojiOpen] = useState(false);

  const showForm = () => setFormOpen(true);
  const hideForm = () => setFormOpen(false);
  const showEmoji = () => setEmojiOpen(true);
  const hideEmoji = () => setEmojiOpen(false);

  function savePalette(emoji){
    hideEmoji();
    handleSave(emoji.native)
    
  }

  function initiate_back(){
    if (!saved){
      setSavedDialog(true);
    }
    else{
      GoBack();
    }
  }

  return (
    <Root>
    <CssBaseline />
    <AppBar position="fixed" open={open}>
    <Toolbar>
    <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    sx={[
      {
        mr: 2,
      },
      open && { display: 'none' },
    ]}
    >
    <AddToPhotosIcon />
    </IconButton>
    <Typography variant="h6" noWrap component="div">
    Create A Palette
    </Typography>
    </Toolbar>
    <NavButtons>
    <Button variant='contained' color='error' onClick={initiate_back}  > Go Back</Button>
    <Button variant="contained" onClick={showForm}>
    Save
    </Button>

    </NavButtons>
    </AppBar>

    {formOpen && <PaletteFloatingForm 
      handleChange = {handleChange} 
      PaletteList={PaletteList} 
      newPaletteName={newPaletteName} 
      hideForm={hideForm} 
      showEmoji= {showEmoji}
      formOpen= {formOpen}/>}

    <Dialog open = {emojiOpen} onClose={hideEmoji} PaperProps={{
      style: { borderRadius: "15px",backgroundColor:"black"}
  }}>
      <DialogTitle style={{backgroundColor:"black", color:"white"}}>
        Choose a Palette Emoji
    </DialogTitle>
      <Picker data = {data} onEmojiSelect={savePalette} />
    </Dialog>

    </Root>

  )
}
