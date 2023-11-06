import React  from "react";
import {useState} from "react";

function Button (){

    const [nam,setNam] = useState("Sawvik in function");

    function set(){
        setNam(nam === "Dipto"?"Sawvik in function":"Dipto");
    }

    return(
        <div>
            <h1>UseState Hook </h1>
            <p onClick={set}>nam</p><p>{nam}</p>
        </div>
    );
}

/*class Button extends React.Component{
    state={nam:"Sawvik"};
    change=()=>{
        this.setState({nam:this.state.nam==="Sawvik"?"Dipto":"Sawvik"});
    }
    render(){
        const {nam} = this.state;
    return(
        <div>
            <p onClick={this.change}>nam</p><p>{nam}</p>
        </div>
    );
} 
} */

export default Button; 