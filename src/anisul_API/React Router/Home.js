import {useNavigate} from 'react-router-dom'; 
// import NavBar from './NavBar';


export default function Home(){

    const navigate = useNavigate();

    return(<>
    <h1>This is the Home Page</h1>
    <button type="button" onClick={() => {navigate("ordersummary")}}>Go to Order Summary</button>
    </>
    );
}