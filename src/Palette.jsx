import { useState } from "react";
import ColorBox from "./ColorBox"
import NavBar from "./NavBar";
import { useParams } from "react-router";
import { generatePalette } from './ColorHelpers.js'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PaletteFooter from "./PaletteFooter.jsx";
import { PaletteBox, PaletteColors } from "./styles/PaletteStyles.js";

export default function Palette({seedColors}){
  const navigate = useNavigate();
  const {id} = useParams()
  const oldPalette = seedColors.filter((palette) => palette.id === id)[0]
  useEffect(() => {
    if (!oldPalette) {
      navigate('/');
    }
  }, [oldPalette, navigate]);

  if (!oldPalette) return null; 

  const palette = generatePalette(oldPalette)
  const [level,setLevel] = useState(500);
  const [format,setFormat] = useState("hex")
  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox background = {color[format]} name = {color.name} key = {color.id} palette_id = {palette.id} color_id = {color.id} showFullPalette = {true}/>
  ))

  function changeLevel(newLevel){
    setLevel(newLevel);
  }

  function changeFormat(evt){
    setFormat(evt.target.value);
  }

  return (
    <PaletteBox >
    <NavBar level = {level} changeLevel= {changeLevel} handleChange={changeFormat} format={format} slide = {true}/>
    <PaletteColors >
    {colorBoxes}
    </PaletteColors>
    <PaletteFooter paletteName={palette.paletteName} emoji = {palette.emoji} />
    </PaletteBox>
  )
}
