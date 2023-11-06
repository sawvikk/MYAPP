// import { Link,Outlet } from "react-router-dom";

// export const Users = () => {
//     return (
//         <>
//         <div>
//             <Link to="one">User1</Link>
//             <Link to="two">User2</Link>
//             <Link to="three">User3</Link>
//             <Outlet/>
//         </div>
//         </>
//     );
// }

import { Outlet,useSearchParams } from "react-router-dom";

export const Users = () => {
    const [key,setkey] = useSearchParams();
    const showkey = key.get('filter')==='active';

    return (
        <>
        <Outlet/>
        <button onClick ={ () => setkey({filter:'active'}) }>Active Users</button> &nbsp; &nbsp;
        <button onClick = {()=> setkey()}>Reset Filters</button>
        {showkey? (<h2>Showing Active Users</h2>):(<h2>Showing All users</h2>)}
        </>
    );
}