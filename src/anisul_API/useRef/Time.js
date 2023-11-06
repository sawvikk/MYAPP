import React, { useRef } from 'react';
import {useState,useEffect} from 'react';

function Time(){
    const [date,setDate] = useState(new Date());
    const jaki = useRef();

    const tick = () => {setDate(new Date());}

    useEffect(() => {
        jaki.current =setInterval(tick, 1000);
        // console.log(interval);
        // const interval =setInterval(tick, 1000);
        return () => {
            clearInterval(jaki.current);
            // clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1>Time :  {date.toLocaleTimeString()}</h1>
            <button type="button" onClick={()=>clearInterval(jaki.current)}>Sawvik</button>
        </div>
    );
}

export default Time;