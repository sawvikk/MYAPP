

import React from 'react';
import New from './new';

class Info extends React.Component{
    
    state = {first:"Hidden Answer"}
    
    show = (b) => {
        this.setState({first:b })
    }

    render(){
        const {first} = this.state;
        let n  ;

        return(
        <>
        <h1>{first}</h1>
        {first==="Hidden Answer"?<New change={this.show} param="সম্মিলিত প্রয়াস" go={true} />:<New change={this.show} param="Hidden Answer" go={false}/>}
        </>
    );}
}

export default Info; 