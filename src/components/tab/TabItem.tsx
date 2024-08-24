import { useContext } from "react";
import { TabItemContext, TabItemProps } from "./type";
import { LevelContext } from '../Context';
export default function HyTabItem(tabItemProps: TabItemProps) {
    const { value, title, children } = tabItemProps;
    const parameter: TabItemContext = useContext(LevelContext);
    function onChangeTabItem(e:MouseEvent){
        e.stopPropagation();
        if(parameter.onChange){
            parameter.onChange(value);
        }
    }
    return <>
        {
            parameter.type === 'title' ? <span className="hy-tab-item" onClick={onChangeTabItem}>{title}</span> :
                parameter.type === 'body' ? parameter.value === value && children : ''
        }
    </>
}
