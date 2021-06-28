import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    detailItem: {
        display: 'flex', 
        justifyContent: 'space-between',
        paddingLeft: '45px',
        paddingRight: '75px'
    }
})


/**
 * Used to to display a single weather detail item.
 * @param {Object} props Values to be used in component 
 *      ie. {name: 'Humidity', value: '100%'}
 * @returns {Typography} that is formatted using the props 
 */
 export const DetailItem = ( props ) => {

    const classes = useStyles()

    // Unpack relevant props from parent 
    const { name, value } = props

    return (
        <Typography className={classes.detailItem}>
            <Box display="inline" fontWeight="fontWeightLight"> 
                {name}: 
            </Box>
            <Box display="inline"  fontWeight="fontWeightBold">
                {value}
            </Box>
        </Typography>
    )
}