import { useState, useEffect } from 'react'
import { ListItem, Box, Typography } from '@material-ui/core'
import getRampAlgorithms from '../../Api' 
import { VictoryPie, VictoryLabel } from "victory"

// Encapsulates all of the chartOptions necessary for the doughnut chart 
const chartOptions = {
    // Array of hexcode colors, defines the colors of chart slices
    colorScale: [
        "#57B1A9", 
        "#8AD6D0",
        "#A4E1DC",
        "#F2F8FD",
        "#BBE2DF"
    ],
    // Defines the size of the 'cut-out' in the middle of the pie chart 
    innerRadius: 100,
    pieRadius: 150,
    // Defines positioning of the value labels in relation to the center of the chart 
    labelRadius: ({ innerRadius }) => innerRadius + 60 ,
    // Defines the formatted result of the label to be displayed
    labels: ({ datum }) => { return datum.y + '%'},
    // Defines the necessary style attributes for the text labels on the chart 
    // ie. bold, 20 and light blue color 
    labelStyle: [
        {
            fill: '#8AC4BF',
            fontSize: 20,
            fontWeight: 'bold'
        }
    ]

}

/**
 * A wrapper for a doughnut chart that that displays the algorithm count 
 *      across all of the ramps.
 * 
 * The VictoryPie component uses chartOptions for formatting purposes. 
 * 
 * @returns {ListItem} A list item that contains the chart and a description
 */
 export const ChartItem = () => {

    // Used to store the totals of each algorithm across all the ramps 
    const [ chartData, setChartData ] = useState([])

    // When the component is first loaded, get data from the api 
    useEffect(
        () => getRampAlgorithms((newRamps) => handleUpdate(newRamps)), 
    [])

    /**
     * Used to count up the totals of each ramp algorithm 
     * @param {Array} newRamps The data of ramps and what algorithms they are using. 
     *      Assumed to be in the form of newRamps = [...{id: 'Ramp1', algorithm: 'Algorithm1'}]
     */
    const handleUpdate = ( newRamps ) => {

        // Used to store the totals of the algorithms 
        const algorithmTotals = {}

        // Sort the data and create a new data value 
        for (var rampKey in newRamps) {
            var { algorithm } = newRamps[rampKey]
            if (algorithmTotals[algorithm]) {
                algorithmTotals[algorithm] += 1 
            } else {
                algorithmTotals[algorithm] = 1
            }
        }

        const pieData = []

        // Sort the totals into a format that can be used by VictoryPie 
        for (var totalKey in algorithmTotals) {
            pieData.push({x: totalKey, y: algorithmTotals[totalKey]})
        }

        setChartData(pieData)
    }

    return (
        <Box>
            <ListItem>
                <VictoryPie
                    data={chartData}
                    theme={chartOptions.theme}
                    colorScale= {chartOptions.colorScale} 
                    innerRadius={chartOptions.innerRadius}
                    radius={chartOptions.pieRadius}
                    labelRadius={chartOptions.labelRadius}
                    labels={chartOptions.labels}
                    labelComponent={
                        <VictoryLabel style={chartOptions.labelStyle} />
                    }
                    />
            </ListItem>
                
            <ListItem>
                <Typography>Algorithm information...</Typography>
            </ListItem>
    </Box>
    )
}