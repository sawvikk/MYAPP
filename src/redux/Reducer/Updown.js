const initialState =100;
function change(state = initialState,action){
    switch(action.type){
        case "Increment": return state+1;
        case "Decrement": return state-1;
        default : return state;
    }
}

export default change;