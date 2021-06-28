import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Box, makeStyles } from '@material-ui/core'
import { DelayInfo } from './DelayInfo';
import { AffectedRoad } from './AffectedRoad';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    info: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    arrow: {
        color: '#FFFFFF',
        transform: 'rotate(90deg)', 
        height: '150%',
        preserveAspectRatio: 'none', 
        padding: '5px'
    },
}))

/**
 * Displays details about the road and the delays on this route.  
 * @returns {Box} containing ArrowRightAltIcon, AffectedRoad and DelayInfo componennts.
 */
export const RouteDetails = () => {

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.info}>
                <ArrowRightAltIcon className={classes.arrow} />
                <AffectedRoad />
            </Box>
            <DelayInfo />
        </Box>
    )
}