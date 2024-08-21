import { Component } from "react";

export interface DialogConfig {
    /**
     * 标题
     */
    title?:string;

    children?:Component;
/**
 * 关闭模态后事件
 * @returns void
 */
    afterClose?:()=>void;
}