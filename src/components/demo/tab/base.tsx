import HyTab from "../../tab/Tab"
import HyTabItem from "../../tab/TabItem"

export default function DemoTab(){
    function onChange(last:string,current:string){
        console.log(last);
        console.log(current);
    }
    return <HyTab value="one" onChange={onChange}>
        <HyTabItem value="one" title="标签一">
            标签页1内容
        </HyTabItem>
        <HyTabItem value="two" title="标签二">
            标签页2内容
        </HyTabItem>
        <HyTabItem value="three" title="标签三">
            标签页3内容
        </HyTabItem>
    </HyTab>
}