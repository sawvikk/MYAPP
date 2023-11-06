// import NavBar from './NavBar';
import {useNavigate} from 'react-router-dom'; 

export default function OrderSummary(){

    const navigate = useNavigate();

    return(
    <>
    <h1>This is the Order Summary Page</h1>
    <button type="button" onClick={() => {navigate(-1)}}>Go back</button>
    </>

    );
}