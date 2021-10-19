import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const fetchWebAPI = () => {
    return fetch("https://run.mocky.io/v3/36decc3b-d342-4ee7-80e8-f12c3a8cc759").then((response) =>
        response.json()
    );
};

const fetchFullStackAPI = () => {
    return fetch("https://run.mocky.io/v3/cd9d9aa8-dd50-4b15-a1e8-dee576c683db").then((response) =>
        response.json()
    );
};

const ChartsImport = () => {
    const [webPlanData, setWebPlanData] = useState([]);
    useEffect(() => {
        fetchWebAPI().then((newdata) => {
            setWebPlanData(newdata)
            console.log(newdata)
        }).catch(error => console.log(error))
    }, []);

    const [fullStackData, setFullStackData] = useState([]);
    useEffect(() => {
        fetchFullStackAPI().then((fulldata) => {
            setFullStackData(fulldata)
            console.log(fulldata)
        }).catch(error => console.log(error))
    }, []);

    Highcharts.setOptions({
        colors: ['#5270BE', '#9A5990']
    });

    return (
        <div className='App'>
            <HighchartsReact highcharts={Highcharts} options={{
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'HighCharts'
                },

                xAxis: {
                    categories: ['Oct 1-Nov 1', 'Nov 1-Dec 1', 'Dec 1-Jan 1', 'Jan 1-Feb 1', 'Feb 1-Mar 1', 'Mar 1-Apr 1', 'Apr 1-May 1', 'May 1-Jun 1', 'Jun 1-Jul 1', 'Jul 1-Aug 1', 'Aug 1-Sep 1']
                },
                yAxis: {
                    min: 0,
                    max: 200

                },
                legend: {
                    enabled: true
                },
                tooltip: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    },
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                    shared: true,
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:2f}%</b> of total<br/>'
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true
                        }
                    },
                    series: {
                        pointPadding: 0,
                        borderWidth: 4,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },
                series: [{
                    name: 'Full Stack',
                    data: [60, 30, 80, 40, 30, 80, 50, 90, 70, 30, 70, 40]
                    // data: fullStackData.map((full) => {
                    //     console.log(full)
                    //     return full.Full
                    // })
                }, {
                    name: 'Web',
                    data: [40, 60, 50, 30, 10, 20, 30, 40, 30, 20, 30, 20]
                    // data: webPlanData.map((web) => {
                    //     console.log(web)
                    //     return web.Web
                    // })
                }]
            }} />
        </div>
    )

}




export default ChartsImport;



