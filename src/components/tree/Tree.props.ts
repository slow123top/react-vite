import { ReactNode } from "react";

/**
 * 树组件属性集合类型
 */
export interface TreeProps {
    data:TreeData[]

    children: ReactNode[];
    // columns:
}



/**
 * 行数据类型
 */
interface TreeData {
    // 标识
    key:string;
    // 标题
    label:string;
    // 其他
    [key:string]:string | number | boolean;
}