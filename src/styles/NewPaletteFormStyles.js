export const drawerWidth = 350;
import { styled } from '@mui/material/styles';

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    height: "calc(100vh - 50px)",
    flexGrow: 1,
    padding: "0px ",
    backgroundColor: "white",
    flexDirection: "row",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);


export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const DrawerContainer= styled('div')(({ theme }) => ({
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
}))

export const Buttons = styled('div')(({ theme }) => ({
  width: "100%",
  display: 'flex',
  justifyContent: "center",
  marginTop: "1rem",
  '& Button':{
    width: "35%",
    marginLeft: "5px"

  }

}))


