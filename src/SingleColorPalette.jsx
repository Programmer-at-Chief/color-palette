import { useParams } from "react-router"
import { generatePalette } from './ColorHelpers.js'
import { useState } from "react"
import NavBar from './NavBar.jsx'
import PaletteFooter from './PaletteFooter'
import ColorBox from './ColorBox.jsx'
import { PaletteBox,
  PaletteColors,
  GoBack,
  BackButton,
} from "./styles/SingleColorPaletteStyles.js"

export default function SingleColorPalette({seedColors}){

  const [format,setFormat] = useState("hex")
  function changeFormat(evt){
    setFormat(evt.target.value);
  }

  const {palette_id,color_id} = useParams()
  const palette= generatePalette(seedColors.find(p => p.id === palette_id));
  function gatherShades(palette,color_id){
    let shades = []
    for (let shade in palette.colors){
      shades.push(palette.colors[shade].filter((color) => color.id === color_id)[0])
    }
    return shades.slice(1);
  }
  const shades = gatherShades(palette,color_id)
  console.log(shades)

  const colorboxes = shades.map(color => (
    <ColorBox key = {color.name} name = {color.name} background= {color[format]} showFullPalette={false}/>
  ))

  return (
    <PaletteBox >
    <NavBar handleChange={changeFormat} format={format} slide = {false}/>
    <PaletteColors>
    {colorboxes}
    <GoBack style={{marginBottom:"-4.4px"}}>
    <BackButton to={`/palette/${palette.id}`}> GO BACK </BackButton>
    </GoBack>
    </PaletteColors>
    <PaletteFooter paletteName = {palette.paletteName} emoji = {palette.emoji}/>
    </PaletteBox>
  )
}
