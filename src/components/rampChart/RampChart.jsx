import { useState } from 'react'
import { Box, List, ListItem, Typography, makeStyles, fade } from '@material-ui/core'
import { ExpandLess, ExpandMore} from '@material-ui/icons';
import { ChartItem } from './ChartItem'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#171E26',
        borderRadius: '1%',
        borderColor: fade('#808080'),
        marginBottom: '15px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    icon: {
        color: '#FEFFEF', 
        padding: '5px'
    },
}))


/**
 * The main component visable that is clickable to show or hide the ramp chart 
 * @returns {Box} A box component that houses a List of items: the title button and the chart 
 */
export const RampChart = () => {

    // Used to provide className references to the components
    const classes = useStyles()

    // Used to handle the hiding and showing of the chart 
    const [ open, setOpen ] = useState(true);

    /**
     * Used as a callback when the title button is pressed. 
     * If open === true, sets to false. If open === false, sets to true. 
     */
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Box className={classes.root} >
            <List component="nav" aria-label="main mailbox folders">

                <ListItem className={classes.header} button onClick={handleClick}>
                    
                    <Typography>RAMP CHART</Typography>
                    {open ? <ExpandLess className={classes.icon} /> : <ExpandMore  className={classes.icon} />}
               
                </ListItem>

                {open && 
                    <ChartItem />
                }
            </List>
        </Box>
    )
}