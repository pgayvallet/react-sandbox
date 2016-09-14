import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Highcharts from "highcharts";
import * as _ from "lodash";
import { shallowEqual } from "../../core/utils";

import { defaultConfig } from "./default-config";


function processConfig(options : HighchartsOptions, renderTo : HTMLElement) : HighchartsOptions {
    return _.merge({}, defaultConfig, options, {
        chart : {
            renderTo : renderTo
        }
    });
}

export interface HighchartProps {

    config : HighchartsOptions

}

export class Highchart extends React.Component<HighchartProps, any> {

    chart : HighchartsChartObject;

    render() {
        return (
            <div className="highchart">
                <div ref="chart" className="chart-container"></div>
            </div>
        );
    }

    componentDidMount() {
        if(this.props.config != null) {
            this.createChart();
        }
    }

    shouldComponentUpdate(nextProps:HighchartProps, nextState:any, nextContext:any) : boolean {
        return !shallowEqual(this.props, nextProps);
    }

    componentDidUpdate(prevProps:HighchartProps, prevState:any, prevContext:any):void {
        if(this.props.config != null) {
            this.createChart();
        }
    }

    componentWillUnmount() {
        if(this.chart != null) {
            this.chart.destroy();
        }
    }

    createChart() {
        let config = processConfig(this.props.config, this.getChartContainer());
        this.chart = new Highcharts.Chart(config);
    }
    
    
    getChartContainer() : HTMLElement {
        return ReactDOM.findDOMNode<HTMLElement>(this.refs["chart"])
    }
    
}