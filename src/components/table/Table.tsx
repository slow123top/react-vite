import { LevelContext } from "../Context";
import HyTableRow from './TableRow';
import { ColumnProps, DataItemProps, TableProps } from "./type";

function HyTable(tableProps: TableProps) {
    const columns = tableProps.columns;
    const data = tableProps.data;
    const children = tableProps.children;
    const selectedIdSet: Set<string> = new Set();
    return (
        <table>
            {<thead>
                <tr>
                    {/* {children ? Children.map(children, function (child, index) {
                        return <th key={child.props.colId}>{child.props.label}</th>
                    }) : columns?.map(column => <th key={column.key}>{column.label}</th>)} */}
                    <LevelContext.Provider value={{ isHeader: true }}>
                        {children ? children : columns?.map((column: ColumnProps) => <th key={column.key}>{column.label}</th>)}
                    </LevelContext.Provider>
                </tr>
            </thead>}
            <tbody>
                {/* column template */}
                {children ? data.map((dataItem: DataItemProps, index: number) => <tr key={dataItem.key}>
                    <LevelContext.Provider value={{ dataItem, index }}>
                        {children}
                    </LevelContext.Provider>
                </tr>) :
                    <LevelContext.Provider value={{selectedIdSet}}>
                        {data.map((dataItem: DataItemProps, index: number) => <HyTableRow index={index} data={dataItem} columns={columns!}></HyTableRow>)}
                    </LevelContext.Provider>}
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}

export default HyTable;