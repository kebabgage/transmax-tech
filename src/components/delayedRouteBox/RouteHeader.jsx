import { makeStyles, Box, Typography } from "@material-ui/core"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useContext } from 'react';
import { RouteItemContext } from "./DelayedRoutes"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row',
        ustifyContent: 'space-between', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    header: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    red: {
        padding: '5px',
        color: '#FF0000'
    },
    yellow: {
        padding: '5px',
        color: '#FFFF00'
    }
}))

/**
 * Displays a title and a ciruclar icon that is styled specified by the context. 
 * @returns {Box} Component that contains styled icon and typography components
 */
export const RouteHeader = () => {

    // Values from the context of this route needed for the header 
    const { 
        // Determines the class of the icon and how it is styled (red/yellow)
        status, 
        // Determines the title of the route 
        name, 
        // Determines the distance -- a number. 
        distanceValue, 
        // Determines the unit of the distance -- a string. 
        distanceUnit 
    } = useContext(RouteItemContext)

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <FiberManualRecordIcon preserveAspectRatio="none" className={classes[status]} />
                <Typography>{name}</Typography>
            </Box>
            <Typography variant="body2">{distanceValue}{distanceUnit}</Typography>          
        </Box>
    )
}