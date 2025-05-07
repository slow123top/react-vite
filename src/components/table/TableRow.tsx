import { MouseEventHandler, ReactNode, useContext } from "react";
import { ColumnProps, TableRowProps } from "./type";
import { LevelContext } from "../Context";

function HyTablRow(props: TableRowProps) {
  const columns = props.columns;
  const data = props.data;
  const rowIndex = props.index;
  const obj: { selectedIdSet: Set<string> } =
  useContext(LevelContext);
  let hasValue = obj.selectedIdSet.has(data.key);
  function selectRow(e: MouseEvent) {
    // const hasValue = obj.selectedIdSet.has(data.key);
    // if(hasValue){

    // }
    // e.target.
    console.log(e);
  }
  return (
    <tr key={data.key}>
      <td>
        <input type="checkbox" checked={hasValue} onClick={selectRow} />
      </td>
      <td>
        {rowIndex + 1}
      </td>
      {columns?.map((column: ColumnProps) => (
        <td key={`${data.key}_${column.key}`}>
          {data[column.key!] as ReactNode}
        </td>
      ))}
    </tr>
  );
}

export default HyTablRow;
