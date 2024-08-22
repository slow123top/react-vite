import { FormEventHandler, useState } from "react";

export default function Form() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('你好');

    function handleSubmit(e: any) {
        e.preventDefault();
        setTimeout(() => {
            alert(`你向 ${to} 说了${message}`);
        }, 5000);
    }
    return <form onSubmit={handleSubmit}>
        <label>
            to:{''}
            <select value={to} onChange={e => setTo(e.target.value)}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
            </select>
        </label>
        <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}>
        </textarea>
        <button type="submit">
            发送
        </button>
    </form>
}