import { useContext } from 'react'
import { Typography } from '@material-ui/core'
import { RouteItemContext } from "./DelayedRoutes"

/**
 * Used to display the time related information about a delay 
 * @returns {Typography} displaying the time of delay ie. 13 min
 */
export const DelayInfo = () => {

    // Define the values we need to display in this component
    const { 
        delayTime,
        delayUnit
    } = useContext(RouteItemContext)

    return (
        <Typography variant="h5">
            {delayTime} 
            <Typography variant="body1" display="inline"> {delayUnit} </Typography>
        </Typography>                      
    )
}
