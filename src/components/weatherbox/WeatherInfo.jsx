import { Box, Typography, makeStyles } from "@material-ui/core"
import { Date } from "./WeatherDate"

const useStyles = makeStyles({
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    }
})

/**
 * Displays hard-coded weather info values for the set location
 * @returns {Box} that contains Typography elements 
 */
export const Info = () => {

    const classes = useStyles()

    return (
        <Box className={classes.info}>
            <Typography >Melbourne</Typography>
            <Typography variant="h3" >32°</Typography>
            <Date />
        </Box>
    )
}