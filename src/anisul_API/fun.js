// export default function Fun({locale}){
//     return(<div>
//         <h1>Hello {new Date().toLocaleTimeString(locale)}</h1>
//     </div>);
// }

import React,{setState} from "react";

export default class Fun extends React.Component{

    state = {locale:"bn-BD"};

    mon(){
        console.log("The button was clicked ");
    }

    change =(q)=>{
        this.setState({locale:q});
        console.log(990); 
    }

    render(){
        
        let asd;
        if(this.state.locale=="bn-BD")
            asd = (<button type="button" onClick={()=>{this.change("en-US");}}>Make English</button>);        
        else{
            asd =(<button type="button" onClick={()=>{this.change("bn-BD");}}>Bangla Korun</button>);
        }

        return (
        <div>
            <h2>Learning Conditional Renderring</h2>
            <h1>The Time is {new Date().toLocaleTimeString(this.state.locale)}</h1>
              {this.state.locale==="bn-BD"?<button type="button" onClick={()=>{this.change("en-US");}}>Click to change Language</button>:<button type="button" onClick={()=>{this.change("bn-BD");}}>Click to change Language</button>}

              {this.state.locale==="en-US" && <h1>This will be shown if language is English</h1>}

        </div>
    );
}
}

// export default Fun;