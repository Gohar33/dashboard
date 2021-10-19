import React, { useState, useEffect } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const fetchMausAPI = () => {
    return fetch("https://61573c3c8f7ea6001798516c.mockapi.io/stuffapi/maus").then((response) =>
        response.json()
    );
};

const fetchPlanAPI = () => {
    return fetch("https://dataplan.free.beeceptor.com/my/api/path/dataplan").then((response) =>
        response.json()
    );
};

const LineChart = () => {
    const [mauchart, setMauchart] = useState([]);
    useEffect(() => {
        fetchMausAPI().then((data) => {
            setMauchart(data)
            console.log(data)
        }).catch(error => console.log(error))
    }, []);

    const [planchart, setPlanchart] = useState([]);
    useEffect(() => {
        fetchPlanAPI().then((dataplan) => {
            setPlanchart(dataplan)
            console.log(dataplan)
        }).catch(err => console.log(err))
    }, []);

    return (
        <div>

            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    title: {
                        text: 'LineCharts'
                    },
                    yAxis: {
                        min: 0,
                        max: 8000
                    },

                    xAxis: {

                        categories: [
                            'Oct 2020',
                            'Nov 2020',
                            'Dec 2020',
                            'Jan 2021',
                            'Feb 2021',
                            'Mar 2021',
                            'Apr 2021',
                            'May 2021',
                            'Jun 2021',
                            'Jul 2021',
                            'Aug 2021',
                            'Sep 2021',

                        ],


                        accessibility: {
                            rangeDescription: ''
                        },

                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },
                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                                pointStart: 2010
                            }
                        },


                    },

                    series: [{
                        name: 'MAUs',
                        data: mauchart.map((mau) => {
                            console.log(mau)
                            return mau.MAU

                        })
                    }, {
                        name: 'Plan',
                        data: planchart.map((plan) => {
                            console.log(plan)
                            return plan.Plan
                        })
                    }],
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 300
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    },
                }}
            />


        </div>
    )
}

export default LineChart;