// import { useReducer } from "react";

// const initialState =0;
// const reducer = (state,action) => {
//   console.log(state,action);
//   if(action.type==="inc"){
//     return state+1;
//   }
//   else{
//     return state-1;
//   }
// }


// function Hook(){

//   // const [state,setState] = useState(0);
//   const [state,dispatch] = useReducer(reducer,initialState); 
//   return(<>
//   <p>{state}</p>
//   <button onClick={()=>dispatch({type:"inc"})}>Barao</button>
//   <button onClick={()=>dispatch({type:"dec"})}>Komao</button>
//   </>);
// }

// export default Hook;

import { useState } from "react";

function go(a){
  b()
}

function Hook(){
  const [a,b] = useState(123);
  return(
    <>
    <h1>{a}</h1>
    <h2 onClick={()=>b(12)}>{b}</h2>
    </>
  );
}


export default Hook;