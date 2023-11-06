// import { useState } from "react";
// import Component2 from "./Component2";
// import { Use } from "./UserContext";

// const Component1 = () => {
//     const [user,setuser] = useState({id:10,nam:"Sawvik Kar"});
// return(<div>
// <Use.Provider value={user}>
// <Component2/>
// </Use.Provider>
// </div>
// );
// }

// export default Component1;

import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Component2 from './Component2';

function Component1(){
    const [user,setUser] = useState(10);

    setUser((user)=>{user+1});
    
    return (<div>
        <UserContext.Provider value={user} >
        <Component2/>
        </UserContext.Provider>
</div>);
}

export default Component1;