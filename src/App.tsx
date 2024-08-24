import { useState, useRef, ComponentLifecycle } from 'react'
import { OriginTable } from './components/origins/table'
import Dialog from './components/origins/dialog/Dialog'
import Dropdown from './components/dropdown/Dropdown'
import StateDemo from './demo/StateDemo';
import StateDemoTime from './demo/StateDemoTime';
import StateDemoForm from './demo/StateDemoAlice';
import StateDemoUpdateFunction from './demo/StateDemoUpdateFunction';
import './App.css'
import DemoHyTable from './components/demo/table/base';
import DemoTab from './components/demo/tab/base';
import DemoTabData from './components/demo/tab/tab-data';

function App() {
  const [count, setCount] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const data = [
    {
      title: '选项1',
      clickEvent: () => { console.log(111); }
    },
    {
      title: '选项2',
      clickEvent: () => { console.log(222); }
    }
  ];
  return (
    <>
      <div>
        <Dropdown title={"下拉面板展示"} data={data}></Dropdown>
        <Dialog
          open={open}
          close={function () { setOpen(e => !e) }}
        // afterClose={function(){console.log('AAA')}}
        >
          aaaaaaa
        </Dialog>
      </div>
      <button onClick={function (e) {
        e.stopPropagation();
        setOpen(o => !o)
      }}>验证</button>
      {/* <OriginDialog afterClose={function(){console.log('aaa')}}><span>AAAA</span></OriginDialog> */}
      <div><button onClick={function () {
        Dialog.show({
          title: 'AAAA',
          afterClose: function () { console.log('AAA') }
        })
      }}>
        打开模态框</button>
      </div>
      <StateDemo />
      <StateDemoTime />
      <StateDemoForm></StateDemoForm>
      <StateDemoUpdateFunction />
      <DemoHyTable></DemoHyTable>
      <DemoTab></DemoTab>
      <DemoTabData></DemoTabData>
    </>
  )
}

export default App
