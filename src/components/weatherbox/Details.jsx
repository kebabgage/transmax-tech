import { Box, Grid, makeStyles } from '@material-ui/core'
import { DetailItem } from './DetaiItem'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
})


// Contains the data that is populated to the weather deatils. 
const weatherInfo = [
    {
        // The title of the detail
        name: 'Humidity',
        // The value of the detail 
        value: '78%',
    },
    {
        name: 'Chance of Rain',
        value: '34%'
    },
    {
        name: 'Wind',
        value: '78 kmh'
    },
    {
        name: 'Tomorrow',
        value: '30%'
    }
]

/**
 * Displays all the pre-defined weather details in a grid
 * @returns {Box} that contains grid elements. 
 */
export const WeatherDetails = () => {

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={15}>
                    <Grid container justify="center" spacing={3}>
                        {weatherInfo.map(item => {
                            // For each weather item, unpack the values 
                            const { name, value } = item

                            // Return the Grid item. 
                            return (
                                <Grid item xs={12}>
                                    <DetailItem name={name} value={value}/>
                                </Grid>
                        )})}
                    </Grid>
                </Grid>
            </Grid>
           

        </Box>
    )
}