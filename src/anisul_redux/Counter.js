
import { useDispatch, useSelector } from "react-redux";
import { add,sub,reset } from "./action/Actions";
// const initialState =0;

// const reducer = (state,action) => {
//     switch(action){
//         case "add":
//             return state+1;
//         case "sub": 
//             return state-1;
//         case "reset":
//             return 0;
//         default: 
//             return state;
//     }
// }


export default function Counter(){
    const count = useSelector((s) => s.count);
    const dispatch = useDispatch();
    // const handle = 
    // const [state,dispatch] = useReducer(reducer,initialState);

    return(<>
        <h1>Counter App from React-Redux</h1>
        <h2>Count {count} </h2>
        <button onClick={()=>dispatch(add())}>Increment</button>
        <button onClick={()=>dispatch(sub())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </>);
}
