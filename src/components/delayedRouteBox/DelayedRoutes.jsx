import { createContext, useState } from 'react'
import { Divider, List, ListItem, Box, Typography, makeStyles, fade } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { RouteItem } from './RouteItem'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#171E26',
        borderRadius: '1%',
        borderColor: fade('#808080'),
        marginBottom: '15px'
    },
    icon: {
        color: '#FEFFEF', 
        padding: '5px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    divider: {
        backgroundColor: '#808080',
        opacity: 0.3
    }

}))


// Array of objects that is required to populate the route items 
//      in this component. 
const routes = [
    {
        // Defines the style of the indicator of the delay icon 
        status: 'red', 
        // Defines the title of the route 
        name: 'Monash Fwy Out',
        // Defines the numeric value of the route distance 
        distanceValue: '13',
        // Defines the unit value of ther route distance. 
        distanceUnit: 'km',
        // Defines the starting point of the delayed route. 
        from: 'Kings Way',
        // Defines the ending point of the delayed route. 
        to: 'EastLink',
        // Defines the numeric value of time delay 
        delayTime: '45',
        // Defintes the unit value of the route distance. 
        delayUnit: 'min'
    },
    {
        status: 'red', 
        name: 'Monash Fwy Out',
        distanceValue: '15',
        distanceUnit: 'km',
        from: 'Kings Way',
        to: 'EastLink',
        delayTime: '28',
        delayUnit: 'min'
    },
    {
        status: 'yellow', 
        name: 'Western Ring Rd',
        distanceValue: '5',
        distanceUnit: 'km',
        from: 'West Gate Fwy',
        to: 'Western Fwy',
        delayTime: '5',
        delayUnit: 'min'
    },
    {
        status: 'yellow', 
        name: 'Eastern Fwy',
        distanceValue: '15',
        distanceUnit: 'km',
        from: 'Hoddle St',
        to: 'Springvale Rd',
        delayTime: '25',
        delayUnit: 'min'
    },
]

// Defined to easily pass the values of each of the routes items 
export const RouteItemContext = createContext()

/**
 * Displays the toggle-able list of delayed routes on the sidebar.   
 * @returns {Box} containing a ListView that can be toggled to see more or less.  
 */
export const DelayedRoutes = () => {

    const classes = useStyles()

    // Used to determine if the items are displayed or not 
    const [open, setOpen] = useState(true);

    // Toggles the open state of the component 
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Box className={classes.root} >
            <List>

                <ListItem className={classes.header} button onClick={handleClick}>
                    
                    <Typography>DELAYED ROUTES</Typography>
                    {open ? <ExpandLess className={classes.icon} /> : <ExpandMore  className={classes.icon} />}
                
                </ListItem>

                {open && routes.map(routeInfo => {
                    // For each route, render a RouteItem and Divider
                    return <Box>
                            <Divider className={classes.divider} />
                            <RouteItem info={routeInfo} />
                        </Box>
                        })}
        
            </List>
        </Box>
    )
}