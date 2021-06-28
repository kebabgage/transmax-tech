import { makeStyles, ListItem, Box } from '@material-ui/core'
import { RouteItemContext } from './DelayedRoutes'
import { RouteHeader } from './RouteHeader'
import { RouteDetails } from './RouteDetails'

const useStyles = makeStyles((theme) => ({

    root: {
        flex: 1
    }
    ,
    divider: {
        backgroundColor: '#FFFFFF'
    }
}))

/**
 * Displays the header and details about a delayed route. 
 * @param {Object} info Information about the route that is passed through the context.  
 * @returns {ListItem} Contains all the components to display informtation about a route 
 */
export const RouteItem = ({ info }) => {

    const classes = useStyles()

    return (
        <ListItem>
            <RouteItemContext.Provider value={info}>
                <Box className={classes.root}>
                    <RouteHeader />
                    <RouteDetails />  
                </Box>
            </RouteItemContext.Provider>
        </ListItem>
    )
}