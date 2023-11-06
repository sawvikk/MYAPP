import { React,useReducer } from "react";

const i=0;
const reducer = (a,b) => {
    switch (b){
        case 'increment':
            return a+1;
        case 'decrement':
            return a-1;
        default :
            return a;
    }
}

function Counter(){
    const [count,dispatch] = useReducer(reducer,i);
    return(<div>
        <h1>Count {count}</h1>
<button type="button" onClick={()=>{dispatch('increment')}}>Increment</button>
        <button type="button" onClick={()=>{dispatch('decrement')}}>Decrement</button>
    </div>);
}

export default Counter;