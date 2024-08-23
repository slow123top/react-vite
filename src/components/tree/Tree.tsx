import { TreeProps } from "./Tree.props";

export default function HyTree(treeProps:TreeProps){
    return <div>
        {treeProps.children}
    </div>
}