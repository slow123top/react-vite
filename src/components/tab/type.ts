import { ReactNode } from "react";

export interface TabProps {
    value: string;
    children?: ReactNode[];
    data?:TabItemProps[] | undefined;
    onChange?:(last:string,current:string) => void;

}

export interface TabItemProps {
    value:string;
    title:string;
    children?:ReactNode;
    render?:(value?:any)=>ReactNode;
}

export type TabItemContext = {
    // 渲染区域
    type:'title'|'body',
    // 父组件绑定的标签页
    value:string;
    // change事件  当title类型时存在
    onChange?:(value?:any) => void;

}