import './App.css'
import Palette from './Palette'
import seedColors from './seedColors.js'
import { Routes,Route } from 'react-router'
import Home from './Home.jsx'
import SingleColorPalette from './SingleColorPalette.jsx'
import NewPaletteForm from './NewPaletteForm.jsx'
import { useState } from 'react'

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [PaletteList,setPalettesList] = useState(savedPalettes || seedColors)


  function savePalette(palette) {
    setPalettesList(oldPalettes => {
      const updatedPalettes = [...oldPalettes, palette];
      syncLocalStorage(updatedPalettes);
      return updatedPalettes;
    });
  }

  function removePalette(palette){
    setPalettesList(oldPalettes => {
      const updatedPalettes = oldPalettes.filter((pal) => pal.id !== palette.id)
      syncLocalStorage(updatedPalettes);
      return updatedPalettes;
    })
  }

  function syncLocalStorage(palettes) {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }

  return (
    <Routes>
    <Route exact path = '/' element = {<Home seedColors = {PaletteList} removePalette = {removePalette}/>} />
    <Route exact path = '/palette/:id' element = {<Palette seedColors = {PaletteList}/> }/>
    <Route exact path = '/palette/:id' element = {<Palette seedColors = {PaletteList}/> }/>
    <Route exact path = '/palette/new' element  = {<NewPaletteForm savePalette = {savePalette} PaletteList = {PaletteList}/>} />
    <Route exact path = '/palette/:palette_id/:color_id' element = {<SingleColorPalette seedColors={PaletteList}/> }/>
    </Routes>
  )
}

export default App
