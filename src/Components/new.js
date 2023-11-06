import React from 'react';

class New extends React.Component{
    render(){
        const {change,param,go} = this.props;
        return(
            <>
            <button type='button' onClick={()=>{change(param)}}>{param==="Hidden Answer"?"Hide The Answer":"জাতীয় স্মৃতিসৌধের অপর নাম কী?"}</button> 
            {go && <p>Hint: Combined Effort</p>}
            </>
        );
    }
}

export default New; 