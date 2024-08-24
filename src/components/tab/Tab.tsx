import { useState } from "react";
import { TabItemContext, TabProps } from "./type";
import { LevelContext } from '../Context';

export default function HyTab(tabProps: TabProps) {
    const { value, children,onChange } = tabProps;
    const [currentTabItem, setCurrentTabItem] = useState(value);
    const titleParameter: TabItemContext = { 
        value: currentTabItem, 
        type: 'title',
        onChange:(value)=> {
            const lastValue = currentTabItem;
            setCurrentTabItem(()=>value);
            if(onChange && lastValue!== value){
                onChange(lastValue,value);
            }
        } };
    const bodyParameter: TabItemContext = { value: currentTabItem, type: 'body' };
    return <div>
        <div>
            <LevelContext.Provider value={titleParameter}>
                {children}
            </LevelContext.Provider>
        </div>
        <LevelContext.Provider value={bodyParameter}>
            {children}
        </LevelContext.Provider>
    </div>
}