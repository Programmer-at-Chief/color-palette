import { styled } from '@mui/material/styles';
import sizes from './sizes';

export const StyledColorBox = styled('span', {
  shouldForwardProp: (prop) => prop !== 'showFullPalette',
})(({ showFullPalette }) => ({
  width: '20%',
  height: showFullPalette ? '25%' : '50%',
  margin: '0 auto',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
  marginBottom: '-4.5px',
  '&:hover button': {
    opacity: '1',
  },
  [sizes.down("lg")]: {
    width: "25%",
    height : showFullPalette ? '20%' : '33.3333%',
    marginBottom: showFullPalette ? '-4.7px' : '-4.5px'
  },
  [sizes.down('md')]: {
    width: '50%',
    height : showFullPalette ? '10%' : '20%',
    marginBottom: '-4.7px'
  },
  [sizes.down("xs")]: {
    width: "100%",
    height: showFullPalette ? '5%' : '10%',
    marginBottom: '-4.7px'
  },
}));

export const ColoredCopyText = styled('p')(({ color }) => ({
  color,
}));

export const ColoredName = styled('span')(({ color }) => ({
  color,
}));

export const SeeMore = styled('span')(() => ({
  position: 'absolute',
  bottom: '0px',
  right: '0px',
  width: '60px',
  height: '30px',
  backgroundColor: 'rgba(255,255,255,0.3)',
  textAlign: 'center',
  lineHeight: '30px',
  textTransform: 'uppercase',
  border: 'none',
  color: 'rgba(0,0,0,0.6)',
}));

export const CopyButton = styled('button')(({ color }) => ({
  color,
  width: '100px',
  height: '30px',
  position: 'absolute',
  display: 'inline-block',
  top: '50%',
  left: '50%',
  marginLeft: '-50px',
  marginTop: '-15px',
  textAlign: 'center',
  outline: 'none',
  background: 'rgba(255,255,255,0.3)',
  fontSize: '1rem',
  lineHeight: '20px',
  textTransform: 'uppercase',
  border: 'none',
  opacity: '0',
  transition: 'opacity 0.3s ease-in',
}));

export const BoxContent = styled('div')(() => ({
  position: 'absolute',
  padding: '10px',
  width: '100%',
  bottom: '0px',
  left: '0px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontSize: '12px',
}));


export const CopyOverlay = styled('div', {
  shouldForwardProp: (prop) => prop !== 'copied',
})(({ copied }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'inherit',
  opacity: copied ? 1 : 0,
  transform: copied ? 'scale(50)' : 'scale(0.1)',
  transformOrigin: 'center center',
  zIndex: copied ? 10 : 0,
  transition: 'transform 0.6s ease-in, opacity 0.6s ease-in',
}));

export const CopyMsg = styled('div', {
  shouldForwardProp: (prop) => prop !== 'copied',
})(({ copied }) => ({
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  transform: copied ? 'scale(1)' : 'scale(0.1)',
  opacity: copied ? 1 : 0,
  zIndex: copied ? 20 : 0,
  transition: 'all 0.4s ease-in-out',
  transitionDelay: copied ? '0.3s' : '0s',
  transformOrigin: 'center center',
  '& h1':{
    fontSize: "5rem",
    [sizes.down('xs')]:{
      fontSize: '3rem'
    }
  }
}));


