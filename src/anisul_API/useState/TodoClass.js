import React from 'react';

export default class Todo extends React.Component{
    state={roll:"Kar",nam:"Sawvik"}

        Change=(e)=>{
            if(e.target.value.includes("Kar")){
                var roll="Don't Put Title , it's already present. "
            }
            else {

                roll = "";
            }
            this.setState({roll:roll,nam:e.target.value});
        }

    render(){

        const {roll,nam} = this.state;

        return(
            <div>
                <h1>{nam}</h1>
                <input type="text" value={nam} onChange={this.Change}/>
                <h2>{roll||"GOOD"}</h2>
            </div>
        );
    }
}

