import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import chroma from 'chroma-js';

import { 
  StyledColorBox,
  ColoredCopyText,
  ColoredName,
  SeeMore,
  CopyButton,
  BoxContent,
  CopyOverlay,
  CopyMsg
} from './styles/ColorBoxStyles';

export default function ColorBox({ background, name, palette_id, color_id, showFullPalette }) {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const luminance = chroma(background).luminance();
  const isLight = luminance >= 0.6;
  const isDark = luminance <= 0.1;

  const handleMoreColors = (e) => {
    e.stopPropagation();
    navigate(`/palette/${palette_id}/${color_id}`);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CopyToClipboard text={background} onCopy={handleCopy}>

    <StyledColorBox showFullPalette={showFullPalette} style={{ backgroundColor: background }}>
    <CopyOverlay copied={copied} style={{ backgroundColor: background ,width : "100%",height: "100%"}} />

    <CopyMsg copied={copied}>
    <h1>COPIED!</h1>
    <ColoredCopyText color={isLight ? 'black' : 'white'}>{background}</ColoredCopyText>
    </CopyMsg>

    <div className="copy-container">
    <BoxContent>
    <ColoredName color={isDark ? 'white' : 'black'}>{name}</ColoredName>
    </BoxContent>
    <CopyButton color={isLight ? 'black' : 'white'}>Copy</CopyButton>
    </div>

    {showFullPalette && <SeeMore onClick={handleMoreColors}>More</SeeMore>}

    </StyledColorBox>
    </CopyToClipboard>
  );
}
