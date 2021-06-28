import { Box, makeStyles } from '@material-ui/core';
import { WeatherIcon } from './WeatherIcon';
import { Info } from './WeatherInfo';

const useStyles = makeStyles({
    root: {
       display: 'flex',
       alignContent: 'center',
       justifyContent: 'center',
    }
})

/**
 * Displays info about the weather (currently pre-defined and hardcoded) 
 *      as well as an icon that reflects the weather. 
 * @returns {Box} that contians the weather info and an icon 
 */
export const WeatherSummary = () => {

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Info />
            <WeatherIcon />
        </Box>
    )
}