import { useState } from "react";

export default function TodoFunction(){
    const [roll,setroll] = useState(10);
    const [nam,  setnam] = useState("Sawvik");
    const [diya,setDiya] = useState("diya");


    const Change=(e)=>{
        // if(e.target.value.includes("Kar")){
        //     var roll="Don't Put Title , it's already present. "
        // }
        // else {
        //     roll = "Kar";
        // }
        // this.setState({roll:roll,nam:e.target.value});

        let i=0;
        while(i<5){i++; console.log(i); 
        setroll((rol)=>rol+1);}
        
        setnam(e.target.value);
        setDiya(e.target.value+"100");
    }

    return(
            <div>
                
                <h1  >{diya}</h1>
                <h1>{nam}</h1>
                <input type="button" value={nam} onClick={Change}/>
                <h2>{roll||"GOOD"}</h2>
            </div>
        );
}; 