import './App.css';
import { useState } from 'react'
import { IconButton, Box, Drawer, createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core'
import { Weather } from './components/weatherbox/weatherBox';
import { DelayedRoutes } from './components/delayedRouteBox/DelayedRoutes'
import { RampChart } from './components/rampChart/RampChart'
import { ArrowForwardIos, ArrowBackIos} from '@material-ui/icons';


// Defines a few helpful theme elements so that we don't need to 
//    keep redefining
const theme = createMuiTheme({

  // This makes all the Typography elements all in this font family 
  typography: { 
    fontFamily: [
      'Roboto'
    ].join(','),

    // Overides the h5 variant so that all their weight is bold 
    h5: {
      fontWeight: 'bold'
    },

    // Overrides the body2 variant so that their size is different
    body2: {
      fontSize: 13,
    },

    // Overrides the base color of all the variants to white 
    allVariants: {
      color: 'white'
    }
  },

  palette: 'dark'
});


const useStyles = makeStyles({
  root: {
    width: '300px',
    color: 'black',
    padding: '10px',
    background: 'black'
  },
  item: {
    margin: '20px'
  },
  hideIcon: {
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  showIcon: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    color: '#FFFFFF',
    bgcolor: '#FFFFFF'
  }
})


function App() {

  const classes = useStyles()

  const [ open, setOpen ] = useState(false)

  return (
    <ThemeProvider theme={theme}>

      {!open && <IconButton onClick={() => setOpen(!open)} >
        <ArrowForwardIos className={classes.hideIcon} /> 
      </IconButton>}

      <Drawer className={classes.root} anchor={'left'} open={open} >

          <Box className={classes.root} bgcolor="black">
            <IconButton onClick={() => setOpen(!open)}>
              <ArrowBackIos className={classes.showIcon} /> 
            </IconButton>

            <Weather />
            <DelayedRoutes />
            <RampChart />
          </Box>
        </Drawer>
      
    </ThemeProvider>   
  );
}

export default App;
