import { ColumnProps, DataItemProps } from "./type";
import {LevelContext} from '../Context';
import { useContext } from "react";
export default function HyTableColumn(columnProps:ColumnProps) {

    const key = columnProps.colId;
    const dataIndex = columnProps.dataIndex;
    const label = columnProps.label;
    const children  = columnProps.children;
    const render = columnProps.render;
    const obj:{dataItem:DataItemProps,index:number,isHeader:boolean} = useContext(LevelContext);
    // const index = data.findIndex(dataItem=>dataItem[key]);
    // const data: DataItemProps[]= null;
    return <>
    {obj.isHeader&&<th key={key}>{label}</th>}
    {!obj.isHeader&&<td key={key}>
        {render(obj.dataItem[dataIndex],obj.dataItem,obj.index)}
    </td>}
    </>
    
}