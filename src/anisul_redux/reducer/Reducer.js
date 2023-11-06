import { Add,Reset,Sub } from "../constants";
import { initialState } from "../state/States";

const Reducer = (state = initialState,action) => {
    switch(action.type){
        case Add: 
            return {count:state.count+1}
        case Sub:
            return {count:state.count-1}
        case Reset:
            return {count:initialState.count}
        default :
            return {...state}
    }
}

export default Reducer;