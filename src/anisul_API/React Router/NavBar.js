import { NavLink } from "react-router-dom";

export default function NavBar(){

    const navstyle = ({isActive}) => {
        console.log({isActive});
        return({
            margin:"10px",padding:"10px",
color:isActive?"black":"blue", background:isActive ?"yellow":"violet"});
    }

    return(
    <nav>
        <NavLink to="/" style={navstyle}>Home</NavLink>
        <NavLink to="/about" style={navstyle}>About</NavLink>
        <NavLink to="/products" style={navstyle}>Products</NavLink>
        <NavLink to="/ordersummary" style={navstyle}>OrderSummary</NavLink>
    </nav>
    
    );
}