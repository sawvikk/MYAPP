import { Link,Outlet } from "react-router-dom";

export const Products =() => {
    return (
        <>
        <h2>Products Page</h2>
        <Link to="old">Old</Link>
        <Link to="new">New </Link>
        <Outlet/>
        </>
    );
}