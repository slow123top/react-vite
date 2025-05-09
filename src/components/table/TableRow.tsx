import { MouseEventHandler, ReactNode, useContext } from "react";
import { ColumnProps, TableRowProps, TableSelection } from "./type";
import { LevelContext } from "../Context";

function HyTablRow(props: TableRowProps) {
  const columns = props.columns;
  const data = props.data;
  const rowIndex = props.index;
  const obj: {
    selectedIdSet: Set<string>;
    showNumber: boolean;
    selections: TableSelection;
  } = useContext(LevelContext);
  let hasValue = obj.selectedIdSet.has(data.key);
  function selectRow(e: MouseEvent) {
    const checked = e.target.checked;
    // const hasValue = obj.selectedIdSet.has(data.key);
    // if(hasValue){

    // }
    console.log(e);
  }
  return (
    <tr key={data.key}>
      {obj.selections && (
        <td>
          <input type="checkbox" checked={hasValue} onClick={selectRow}/>
        </td>
      )}
      {obj.showNumber && <td>{rowIndex + 1}</td>}
      {columns?.map((column: ColumnProps) => (
        <td key={`${data.key}_${column.key}`}>
          {data[column.key!] as ReactNode}
        </td>
      ))}
    </tr>
  );
}

export default HyTablRow;
