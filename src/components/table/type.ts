import { ReactNode } from "react";


export interface TableSelection {
    selectedKeys?: string[];
    showAll?: boolean;
}
/**
 * 表格属性类型
 */
export interface TableProps {
    columns?: ColumnProps[];
    data: DataItemProps[];
    // 展示序号
    showNumber?: boolean;
    // 展示checkbox
    selections?: TableSelection;
    // children?: ReactNode[];
}

/**表格行 */
export interface TableRowProps {
    index: number;
    data: DataItemProps;
    columns: ColumnProps[];
}

/**
 * 列类型
 */
export interface ColumnProps {
    key: string;
    // 行数据索引
    dataIndex?:string;
    // 标题
    label?:string;
    // 子组件
    children?: ReactNode;
    // 自定义函数
    render?:(text:string,dataItem:DataItemProps,index:number) => ReactNode;
    // [key:string]: string | number | boolean |undefined |object;
}

/**
 * 行数据类型
 */
export interface DataItemProps {
    key: string;
    children?: DataItemProps[];
    [key:string]:string | number | boolean |undefined | object |ReactNode;
}