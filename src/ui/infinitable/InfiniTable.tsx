import * as React from "react";
import * as classNames from "classnames";
import * as _ from "lodash";

import { shallowCompare, shallowEqual } from "../../core/utils"
import {TableConfiguration, ColumnDefinition, ColumnGroupDefinition, ColumnOrGroupDefinition} from "./TableDefinition";


interface InfiniTableProps {

    config : TableConfiguration
    data   : any[]

}

interface InfiniTableState {

    initialized? : boolean
    config?      : TableConfiguration
    columns?     : ColumnConfig[]

}

interface ColumnConfig {

    titles : string[]
    render : (model : any, rowIndex? : number) => JSX.Element | JSX.Element[]

}

export class InfiniTable extends React.Component<InfiniTableProps, InfiniTableState> {

    state : InfiniTableState = {
        initialized : false
    };

    render()  {
        if(!this.state.initialized) {
            return <span>Loading...</span>
        }

        return (
            <div className="infini-table">
                <table className="tl-simple-table">
                    {this.renderHeaders()}
                    <tbody>
                        {this.props.data && this.props.data.map( (model, index) => {
                                return <InfiniTableRow key={index} model={model} state={this.state} index={index}/>
                            })}
                    </tbody>
                </table>
            </div>    
        );    
    }


    renderHeaders() {
        return (
            <thead>
                <tr>
                    {this.state.columns.map((col, colIndex) =>
                        <th className="it-header-cell" key={colIndex}>{col.titles.map((t, titleIndex) => <span className="it-title" key={titleIndex}>{t}</span>)}</th>
                    )}
                </tr>
            </thead>
        );
    }

    componentDidMount():void {
        if(this.props.config != null) {
            this.processConfig(this.props.config);
        }
    }

    componentWillReceiveProps(nextProps:InfiniTableProps, nextContext:any):void {
        if(nextProps.config != null && !shallowEqual(this.props.config, nextProps.config)) {
            this.processConfig(nextProps.config);
        }
    }

    processConfig(config : TableConfiguration) {

        let processedConfig = Object.assign({}, config);


        let columns : ColumnConfig[] = [];

        function isGroup(colOrGroup : ColumnOrGroupDefinition) : colOrGroup is ColumnGroupDefinition {
            return (colOrGroup as ColumnGroupDefinition).group == true;
        }

        processedConfig.columns.forEach( (colOrGroup, i) => {
            if(isGroup(colOrGroup)) {
                // TODO
            } else {
                columns.push(defToConf(colOrGroup));
            }
        });


        function defToConf(def : ColumnDefinition) : ColumnConfig {
            return {
                titles : (_.isString(def.title) && [def.title] || def.title) as string[],
                render : def.render
            }
        }

        this.setState({
            initialized : true,
            config      : processedConfig,
            columns     : columns
        });

    }

}


interface InfiniTableRowProps {
    
    model : any
    index : number
    state : InfiniTableState
    
}


class InfiniTableRow extends React.Component<InfiniTableRowProps, any> {
    
    render() {
        return (
            <tr className="it-row">
                {this.props.state.columns.map( (column, i) => {
                    return <InfiniTableCell key={i} rowIndex={i} column={column} model={this.props.model}/>
                })}
            </tr>
        );
    }

    shouldComponentUpdate(nextProps:InfiniTableRowProps, nextState:any, nextContext:any):boolean {
        return shallowCompare(this, nextProps, nextState);
    }
}


interface InfiniTableCellProps {

    model       : any
    rowIndex    : number
    column      : ColumnConfig

}

class InfiniTableCell extends React.Component<InfiniTableCellProps, any> {

    render() {
        return (
            <td className={classNames("it-cell")}>
                {this.props.column.render(this.props.model, this.props.rowIndex)}
            </td>
        );
    }

    shouldComponentUpdate(nextProps:InfiniTableCellProps, nextState:any, nextContext:any):boolean {
        return shallowCompare(this, nextProps, nextState);
    }
    
}

