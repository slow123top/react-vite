export interface SelectProps{
    // 当前选中的值
    value: any;
    // 是否禁用
    disabled:boolean;
    // 是否支持多选
    multiple:boolean;
    // 
    children:any
}

export interface OptionProps {
    id:string;
    value: any;
    disabled:boolean;
}