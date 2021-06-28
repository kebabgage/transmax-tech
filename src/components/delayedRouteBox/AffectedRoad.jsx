import { useContext } from "react"
import { Box, Typography } from "@material-ui/core"
import { RouteItemContext } from "./DelayedRoutes"


export const AffectedRoad = () => {

    const { 
        from,
        to
    } = useContext(RouteItemContext)

    return (
        <Box>
            <Typography variant="body2">{from}</Typography>
            <Typography variant="body2">{to}</Typography>
        </Box>
    )
}