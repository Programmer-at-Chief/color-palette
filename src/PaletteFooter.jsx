import {Footer } from './styles/PaletteFooterStyles'

export default function PaletteFooter({paletteName,emoji}){
  return (
    <Footer > 
    {paletteName}
    <span> {emoji} </span>
    </Footer>
  )
}
