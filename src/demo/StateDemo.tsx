import { useState } from 'react';
function Counter() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>
                计数
            </button>
        </>
    )
}

export default Counter;