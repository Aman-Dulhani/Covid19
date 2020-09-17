import React, { useEffect } from 'react'
import Chart from 'chart.js'
import './styles.css'

const Graph = ({plotData}) => {

    const chartRef = React.createRef();
    
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
    
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: plotData.map(d => d['date']),
                datasets: [
                    {
                        label: "Daily Cases",
                        data: plotData.map(d => d['dailyconfirmed']),
                        borderColor: '#3cba9f',
                        pointRadius: '5',
                        pointHoverRadius: '5',
                        fill: false,
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }, [chartRef,plotData])

        return (
            <div className='chart-container'>  
                <canvas id="myChart" ref={chartRef} />
            </div>
        )
}

export default Graph
