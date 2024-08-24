import HyTab from "../../tab/Tab"
import HyTabItem from "../../tab/TabItem"
import { TabItemProps } from "../../tab/type";

export default function DemoTabData(){
    function onChange(last:string,current:string){
        console.log(last);
        console.log(current);
    }
    const data=[
        {
            value:'one',
            title:'标签页1',
            render:(currentItem:TabItemProps,data:TabItemProps[])=>
                <>
                    <h1>标签页1</h1>
                    <div>{currentItem.value}</div>
                </>
        },
        {
            value:'two',
            title:'标签页2',
            render:(currentItem:TabItemProps,data:TabItemProps[])=>
                <>
                    <h2>标签页2</h2>
                    <div>{currentItem.value}</div>
                </>
        }
    ]
    return <HyTab data={data} value="one" onChange={onChange}>
        
    </HyTab>
}