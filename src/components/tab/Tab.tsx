import { useState } from "react";
import { TabItemContext, TabItemProps, TabProps } from "./type";
import { LevelContext } from '../Context';

export default function HyTab(tabProps: TabProps) {
    const { value, children, data, onChange } = tabProps;
    const [currentTabItem, setCurrentTabItem] = useState(value);
    const titleParameter: TabItemContext = {
        value: currentTabItem,
        type: 'title',
        onChange: (value) => {
            onTabChange(value);
        }
    };
    function onTabChange(value?: any) {
        const lastValue = currentTabItem;
        setCurrentTabItem(() => value);
        if (onChange && lastValue !== value) {
            onChange(lastValue, value);
        }
    }
    const bodyParameter: TabItemContext = { value: currentTabItem, type: 'body' };
    return <div>
        <div>
            {children ? <LevelContext.Provider value={titleParameter}>
                {children}
            </LevelContext.Provider> :
                renderTitleByData(data, onTabChange)}
        </div>
        {children ? <LevelContext.Provider value={bodyParameter}>
            {children}
        </LevelContext.Provider> : renderBodyByData(currentTabItem, data)}
    </div>
}

function renderTitleByData(data: TabItemProps[], onChange: (value?: any) => void) {
    return <>
        {data.map(item => <span key={item.value} onClick={function (e: MouseEvent) { e.stopPropagation(); onChange(item.value) }}>
            {item.title}</span>)}
    </>
}

function renderBodyByData(activeValue: string, data: TabItemProps[]|undefined) {
    if(data){
        const currentTabItem: TabItemProps = data.find(item => item.value === activeValue);
        return <>
            {currentTabItem && currentTabItem.render(currentTabItem)}
        </>
    }
    
}

