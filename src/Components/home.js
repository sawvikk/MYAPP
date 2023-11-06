import { useNavigate } from "react-router-dom";

export const Home = () => {
    const fun =useNavigate();
    return (<>
        <div>My Home</div>
        <button onClick={()=>fun('delivery')}>Delivery</button>
        </>);
};
