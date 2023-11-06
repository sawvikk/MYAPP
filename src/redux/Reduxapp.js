import { useSelector,useDispatch } from "react-redux";
import { incNumber,decNumber } from "./Actions";


function Reduxapp() {

    const mystate = useSelector((state)=> state.change);
    const dispatch = useDispatch();
    return(<>
    <h1>Sawvik Kar Dipto</h1>
    <h3>using React & Redux</h3>
    <button onClick={()=>dispatch(decNumber())}>-</button>
    <input type="text" value={mystate}/>
    <button onClick={()=>dispatch(incNumber())}>+</button>
    </>);
}

export default Reduxapp;