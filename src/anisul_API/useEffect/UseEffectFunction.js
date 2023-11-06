import { useState } from "react";

export default function useEffectClass(){
    
    const [count, setcount] = useState(10);
    const [date, setdate] = useState(new Date());
    const tick = () => {
        setdate(new Date());
    }
    const Click = () => {
        setcount((a)=> a+1);
    }
    document.title = `Clicked ${count} times`;
    setInterval(tick, 1000);
    
    // ;


    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
            <button type="button" onClick ={Click}>Click</button>
        </div>
        );
}