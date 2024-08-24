import { ReactNode } from "react";

/**
 * 表格属性类型
 */
export interface TableProps {
    columns?: ColumnProps[];
    data: DataItemProps[];
    children?: ReactNode[];
}


/**
 * 列类型
 */
export interface ColumnProps {
    // 列标识
    colId:string;
    // 行数据索引
    dataIndex:string;
    // 标题
    label?:string;
    // 子组件
    children?: ReactNode;
    // 自定义函数
    render:(text:string,dataItem:DataItemProps,index:number) => ReactNode;
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