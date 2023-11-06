import Component3 from "./Component3";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Component2 = () => {
    
    const u = useContext(UserContext);

    return(<div>
        <h1>I am from component2 where id={u} </h1>

    <Component3/>
    </div>);
    }
    
    export default Component2;

// import React from 'react';
// import Component3 from "./Component3";

// const Component2 = () => {
//     return(<div>
//         <Component3/>
//     </div>);
// }

// export default Component2;