import HyTable from "../../table/Table";
import HyTableColumn from "../../table/TableColumn";

/**
 * 基础示例  使用列模板展示表格数据
 * @returns 
 */
export default function DemoHyTable() {
    const data = [
        { key: 'aa', label: 'AA', name: 'CC' },
        { key: 'bb', label: 'BB', name: 'VFV' },
    ]
    return <HyTable data={data}>
        <HyTableColumn colId="label" label="标题" dataIndex="label"
            render={function (text, rowData, index) {
                return <span>{text}</span>
            }}>
        </HyTableColumn>
        <HyTableColumn colId="name" label="名称" dataIndex="name"
            render={function (text, rowData, index) {
                return <span>{text}</span>
            }}>
        </HyTableColumn>
    </HyTable>
}