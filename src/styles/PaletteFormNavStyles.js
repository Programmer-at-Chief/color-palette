import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from './NewPaletteFormStyles';
import sizes from './sizes';

export const Root = styled('div')(() => ({
  display: "flex"
}))

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection :"row",
  justifyContent : "space-between",
  height : "64px",
  alignItems: "center",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export const NavButtons = styled('div')(() => ({
  marginRight: "1rem",
  '& button':{
    margin: "0 0.5rem",
    [sizes.down('xs')]:{
      margin: "0rem",
      padding: "0.3rem" 
    }
  },
  [sizes.down('xs')]:{
    marginRight: 0,
  }
}));
