import {useReducer} from 'react';
function taskReducer(tasks,action) {
    if(action.type === 'added'){
        return [
            ...tasks,
            {
                id:action.id,
                text:action.text,
                done:false
            }
        ]
    }else if(action.type === 'changed') {
        return tasks.map(t=>{
            if(t.id === action.task.id){
                return action.task;
            }
            return t;
        })
    }else if(action.type === 'deleted'){
        return tasks.filter(t=>t.id !== action.id);
    }else {
        throw Error('未知action:'+ action.type);
    }
}

export default function TaskApp(){
    const [tasks,dispatch] = useReducer(taskReducer,initialTasks);
    function handleAddTask(text) {
        dispatch({
            type:'added',
            id:nextId++,
            text:text
        })
    }

    function handleChangeTask(task){
        dispatch({
            type:'changed',
            task
        })
    }


    function handleDeleteTask(taskId){
        dispatch({
            type:'deleted',
            id:taskId
        })
    }




    return <>
    </>
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: '参观卡夫卡博物馆', done: true},
  {id: 1, text: '看木偶戏', done: false},
  {id: 2, text: '打卡列侬墙', done: false}
];

