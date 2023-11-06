import {NavLink} from "react-router-dom";

export const Navbar = () => {
    const monir = ({isActive})=>{
        return {fontWeight:isActive?"bolder":"normal"
    }
    }
    return (<nav>
        <NavLink style={monir} to="/users">Users</NavLink>
        <NavLink style={monir} to="/">Home </NavLink> 
        <NavLink style={monir}to="/about">About</NavLink>
        <NavLink style={monir} to="/products">Products</NavLink>
 </nav>
    );
}

