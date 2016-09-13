import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Highcharts from "highcharts";

export class HighchartTest extends React.Component<any, any> {

    props : any;

    render() {
        return (
            <div className="chart-container">
                <div ref="chart"></div>
            </div>
        );
    }

    componentDidMount():void {

        let theme = (Highcharts as any).theme;
        let chart = new Highcharts.Chart({
            chart : {
                renderTo : ReactDOM.findDOMNode<HTMLElement>(this.refs["chart"]),
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    colorByPoint: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (theme && theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',

                data: [{
                    name: 'Microsoft Internet Explorer',
                    y: 56.33
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77
                }, {
                    name: 'Opera',
                    y: 0.91
                }, {
                    name: 'Proprietary or Undetectable',
                    y: 0.2
                }]
            }]
            
        })

    }

}