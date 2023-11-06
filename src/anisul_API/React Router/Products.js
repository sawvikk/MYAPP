import { Link , Outlet} from 'react-router-dom';


export const Products = ( ) => {
    return(
    <><div>
    <input type="search" placeholder="Search product name"/>
    <h1>This is the Products Page</h1>
    </div>
    <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
    </nav>
    <Outlet/>
    </>    
    );
}
