


export interface ColumnDefinition {

    id?             : string
    attribute?      : string
    title?          : string | string[]
    condition?      : () => boolean
    cellClass?      : string
    width?          : string | number

    render?         : (model : any, rowIndex? : number) => JSX.Element | JSX.Element[]

    sortable?       : boolean
    sortType?       : string
}

export interface ColumnGroupDefinition {

    group?          : boolean
    columns?        : ColumnDefinition[]
    title?          : string | string[]
    
}

export type ColumnOrGroupDefinition = ColumnDefinition | ColumnGroupDefinition;

export interface TableConfiguration {

    id?     : string

    initialSort? : string | number | (string|number)[]

    columns : ColumnOrGroupDefinition[]

}