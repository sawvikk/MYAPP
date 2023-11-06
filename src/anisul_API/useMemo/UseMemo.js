import Title from "./Title";
import { useState } from "react";
import ShowCount from "./ShowCount";
import Button from "./Button";


export default function UseMemo(){

    const [count, setcount] = useState(0);
    const [title, settitle] = useState(5);

    const first = () => {setcount((e)=>e+1); }
    const second = () => {settitle((e)=>e+5); }

    return (<div>
        <Title/>
        {/* <ShowCount count={count} title={"One"}/>
        <Button handleClick={first}> Increment By 1 </Button>
        <hr/><hr/>
        <ShowCount count={title} title={"two"}/>
        <Button handleClick={second}> Increment By 5 </Button> */}
       </div>
        );
}