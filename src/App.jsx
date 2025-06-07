import './App.css'
import Palette from './Palette'
import seedColors from './seedColors.js'
import { Routes,Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Home from './Home.jsx'
import SingleColorPalette from './SingleColorPalette.jsx'
import NewPaletteForm from './NewPaletteForm.jsx'
import { useState,useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import PaletteEditForm from './PaletteEditForm.jsx'

function App() {
  const location = useLocation();
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [PaletteList,setPalettesList] = useState(savedPalettes || seedColors)


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

  const SlidePage = ({ children }) => (
    <motion.div

    initial={{ opacity: 0.2 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.2 }}
    transition={{ duration: 0.3 }}
    >
    {children}
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key = {location.pathname} >
    <Route exact path = '/' element = {
      <SlidePage>
      <Home seedColors = {PaletteList} removePalette = {removePalette}/>
      </SlidePage>
    } />
    <Route exact path = '/palette/:id' element = {
      <SlidePage>
      <Palette seedColors = {PaletteList}/> 
      </SlidePage>
    }/>
    <Route exact path = '/palette/new' element  = {
      <SlidePage>
      <NewPaletteForm savePalette = {savePalette} PaletteList = {PaletteList}/>
      </SlidePage>
    } />
    <Route exact path = '/palette/edit/:palette_id' element  = {
      <SlidePage>
      <PaletteEditForm PaletteList = {PaletteList} setPalettesList={setPalettesList}/>
      </SlidePage>
    } />

    <Route exact path = '/palette/:palette_id/:color_id' element = {
      <SlidePage>
      <SingleColorPalette seedColors={PaletteList}/> 
      </SlidePage>
    }/>
    </Routes>
    </AnimatePresence>
  )
}

export default App
