import chroma from "chroma-js";

const levels = [50,100,200,300,400,500,600,700,800,900];

function generatePalette(starterPalette){
  let newPalette ={
    paletteName: starterPalette.paletteName,
    id : starterPalette.id,
    emoji : starterPalette.emoji,
    colors : {}
  }

  for (let level of levels){
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors){
    let scale = generateScale(color.color,10).reverse();
    for (let i in scale){
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: `rgb(${chroma(scale[i]).rgb().join(', ')})`,
        rgba: `rgba(${chroma(scale[i]).rgb().join(', ')}, 1.0)` });
    }
  }
  return newPalette;
}

function getRange(hexColor){
  const end = "#fff"
  return [
    chroma(hexColor).darken(1.4).hex(), hexColor,end
  ];
}

function generateScale(hexColor,numColors){
   return chroma.scale(getRange(hexColor)).mode("lab").colors(numColors)
}

export {generatePalette}
