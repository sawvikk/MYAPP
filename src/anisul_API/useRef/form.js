import { useEffect,useRef } from "react";
import Input from './Input';


function Form (){

    const abc = useRef(null);

    useEffect(() => {
        abc.current.focus();
    }, []);

    return(<div>
        <p>
            <Input ref={abc} abc="text" bcd="LKLKawvik"/>
        </p>
    </div>);
}

export default Form;