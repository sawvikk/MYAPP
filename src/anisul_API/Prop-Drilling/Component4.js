import React,{ useContext } from "react";
import { UserContext } from "./UserContext";
const Component4 = () => {
    const as= useContext(UserContext);
    return(<div>
        <h1 >This is from Component4 where id={as}</h1>
        </div>
        );
    }
    
    export default Component4;