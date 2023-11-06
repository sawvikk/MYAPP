import React from 'react';

class De extends React.Component{

    shouldComponentUpdate(ghota){
        const{work:kaj} = this.props;
        const{work:kajtwo}=ghota;
        if(kaj === kajtwo) {
            return false;
        }
        return true;
    }

    render(){
        console.log(11);
        const {work,locale,name} = this.props;
        return(<button type="button" onClick={()=>work(locale,name)} >Click to Change</button>);
    }
}

export default De;