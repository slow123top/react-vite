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
    colId:string;
    dataIndex:string;
    label?:string;
    children?: ReactNode;
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