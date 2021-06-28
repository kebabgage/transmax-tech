import { Box, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    date: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '110%'
    }
})


/**
 * Displays the time and date for the sidebar. 
 * @returns {Box} containing the time and date, as Typography elements 
 */
export const Date = () => {

    const classes = useStyles()

    return (
        <Box className={classes.date} >
            <Typography variant="caption">Tue 16th</Typography>            
            <Typography variant="caption">3:46PM</Typography>
        </Box>
    )
}
