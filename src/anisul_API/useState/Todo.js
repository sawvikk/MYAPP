import { useState } from "react";

export default function TodoFunction(){
    const [roll,setroll] = useState("kar");
    const [nam,  setnam] = useState("Sawvik");
    const [diya,setDiya] = useState("diya");

    // var diya="diya";

    // const changeDiya = ()=> {
    //     diya="Drishty";
    // }

    const Change=(e)=>{
        if(e.target.value.includes("Kar")){
            var roll="Don't Put Title , it's already present. "
        }
        else {
            roll = "Kar";
        }

        setroll(roll);
        setnam(e.target.value);
        setDiya(e.target.value+"100");
    }

    return(
            <div>
                <h1  >{diya}</h1>
                <h1>{nam}</h1>
                <input type="text" value={nam} onChange={Change}/>
                <h2>{roll||"GOOD"}</h2>
            </div>
        );
}; 