import { ColumnProps, DataItemProps } from "./type";
import { LevelContext } from "../Context";
import { useContext } from "react";
export default function HyTableColumn(columnProps: ColumnProps) {
  const key = columnProps.colId;
  const dataIndex = columnProps.dataIndex;
  const label = columnProps.label;
  const render = columnProps.render;
  const obj: { dataItem: DataItemProps; index: number; isHeader: boolean } =
    useContext(LevelContext);
  return (
    <>
      {obj.isHeader && <th key={key}>{label}</th>}
      {!obj.isHeader && (
        <td key={key}>
          {render?.(obj.dataItem[dataIndex!] as string, obj.dataItem, obj.index)}
        </td>
      )}
    </>
  );
}
