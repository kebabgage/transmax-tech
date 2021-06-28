import { Box, makeStyles } from '@material-ui/core'
import { WeatherSummary } from './Summary'
import { WeatherDetails } from './Details'


const useStyles = makeStyles((theme) => ({
    box: {
        paddingBottom: '15px'
    }
}))
/**
 * Wraps all the weather components into a single component 
 * @returns {Box} that contains components with weather information 
 */
export const Weather = () => {

    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <WeatherSummary />
            <WeatherDetails />
        </Box>
    )

}