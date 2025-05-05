import { ReactNode } from "react";
import { ColumnProps, TableRowProps } from "./type";

function HyTablRow(props: TableRowProps) {
  const columns = props.columns;
  const data = props.data;
  return (
    <tr key={data.key}>
      {columns?.map((column: ColumnProps) => (
        <td key={`${data.key}_${column.key}`}>
          {data[column.key!] as ReactNode}
        </td>
      ))}
    </tr>
  );
}

export default HyTablRow;
