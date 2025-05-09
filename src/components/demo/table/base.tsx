import HyTable from "../../table/Table";
// import HyTableColumn from "../../table/TableColumn";

/**
 * 基础示例  使用列模板展示表格数据
 * @returns
 */
export default function DemoHyTable() {
  const data = [
    { key: "aa", label: "AA", name: "CC" },
    { key: "bb", label: "BB", name: "VFV" },
  ];
  const columns = [
    { key: "label", label: "标题" },
    { key: "name", label: "名称" },
  ];
  return (
    <HyTable data={data} columns={columns} showNumber={true} selections={{}}>
      {/* <HyTableColumn colId="label" label="标题" dataIndex="label"
            render={function (text: string) {
                return <span>{text}</span>
            }}>
        </HyTableColumn>
        <HyTableColumn colId="name" label="名称" dataIndex="name"
            render={function (text) {
                return <span>{text}</span>
            }}>
        </HyTableColumn> */}
    </HyTable>
  );
}
