import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { motion } from "framer-motion";

import {
  Root,
  Title,
  Colors,
  Emoji,
  MiniColor,
  Delete,
  Edit
} from './styles/MiniPaletteStyles'

function MiniPalette({palette,setDialogOpen,setDeleteId}) {
  const navigate = useNavigate();

  function go_to_palette(id){
    navigate(`/palette/${id}`)
  }

  function edit_palette(e){
    e.stopPropagation();
    navigate(`/palette/edit/${palette.id}`)
  }

  const miniColorBoxes = palette.colors.map(color => (
    <MiniColor style={{backgroundColor: color.color}} key={color.name}>
    </MiniColor>
  ))

  function handleRemove(e){
    setDialogOpen(true);
    setDeleteId(palette);
    e.stopPropagation();
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
    <Root onClick={() => go_to_palette(palette.id)}>
    <Edit>
    <EditIcon className="editicon" onClick={edit_palette}/>
    </Edit>
    <Delete> 

    <DeleteIcon className="deleteicon" onClick= {handleRemove}/>
    </Delete>

    <Colors>
    {miniColorBoxes}
    </Colors>
    <Title> {palette.paletteName} <Emoji> {palette.emoji} </Emoji></Title>
    </Root>

    </motion.div>
  );
}

export default React.memo(MiniPalette);
