import Icon from '@mdi/react'
import { mdiWeatherPartlyCloudy } from '@mdi/js';
import { Box, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: '120px',
        height: '120px',
        padding: '20px'
    }
})


/**
 * Used to display the icon visualisation of the current weather forecast. 
 * @returns {Box} containing an Icon of a partly cloudy weather icon
 */
export const WeatherIcon = () => {

    const classes = useStyles()

    return (
        <Box className={classes.root} >
            <Icon path={mdiWeatherPartlyCloudy} color='white'/>
        </Box>
    )
}