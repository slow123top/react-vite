import { useEffect, useRef, useState, useTransition } from "react";
import { createRoot } from "react-dom/client";
import './Dropdown.css';

export default function Dropdown({ title, data }) {
    const [show, setShow] = useState(false);
    const [isPending, startTransition] = useTransition();

    return (
        <div onClick={function () {
            startTransition(() => {
                setShow(state => !state)
            })
        }}>
            <div>{title}</div>
            <DropdownItemList data={data} show={show}></DropdownItemList>
        </div>
    )
}


function createDropMenu(data: { title: string; clickEvent: () => void; }[]) {
    const dropMenu = document.createElement('div');
    dropMenu.classList.add();
    const root = createRoot(dropMenu);
    const dropdownItems = data.map((item: { title: string; clickEvent: () => void; }) => <DropdownItem title={item.title} clickEvent={item.clickEvent}></DropdownItem>)
    root.render(dropdownItems);
    document.body.appendChild(dropMenu);
}


function DropdownItem({ title, clickEvent }) {
    return (
        <div onClick={clickEvent}>
            {title}
        </div>
    )
}


function DropdownItemList(listData: { data: any[], show: boolean }) {
    const menuRef = useRef(null);

    useEffect(() => {
        if (menuRef.current) {
            document.body.appendChild(menuRef.current);
        }
    })
    const dropdownItems = listData.data.map((item: { title: string; clickEvent: () => void; }) =>
        <DropdownItem key={item.title} title={item.title} clickEvent={item.clickEvent}></DropdownItem>);
    return (
        <div ref={menuRef} className={listData.show ? 'show' : 'hide'} 
        style={{transition:'2s'}}>
            {dropdownItems}
        </div>
    )
}
