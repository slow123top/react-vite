import { Children, createContext, ReactNode } from "react";
import { TableProps } from "./Table.props";
import { LevelContext } from "../Context";
import { DataItemProps } from "./type";

function HyTable(tableProps: TableProps) {
    const columns = tableProps.columns;
    const data = tableProps.data;
    const children = tableProps.children;
    return (
        <table>
            {<thead>
                <tr>
                    {/* {children ? Children.map(children, function (child, index) {
                        return <th key={child.props.colId}>{child.props.label}</th>
                    }) : columns?.map(column => <th key={column.key}>{column.label}</th>)} */}
                    <LevelContext.Provider value={{ isHeader: true }}>
                        {children ? children : columns?.map(column => <th key={column.key}>{column.label}</th>)}
                    </LevelContext.Provider>
                </tr>
            </thead>}
            <tbody>
                {children ? data.map((dataItem: DataItemProps, index: number) => <tr key={dataItem.key}>
                    <LevelContext.Provider value={{ dataItem, index }}>
                        {children}
                    </LevelContext.Provider>
                </tr>) :
                    data.map(dataItem => <tr key={dataItem.key}>
                        {columns?.map(column => <td key={`${dataItem.key}_${column.key}`}>
                            {dataItem[column.key] as ReactNode}
                        </td>)}
                    </tr>)}
            </tbody>
            <tfoot></tfoot>
            {/* {tableProps.children} */}
        </table>
    )
}

export default HyTable;