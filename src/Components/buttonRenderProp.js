import React from 'react';

class ButtonRenderProp extends React.Component{
    state = {count: 0}

    increment=()=> {this.setState((a)=> ({count:a.count+1}));};
    

    render(){
        const {render} = this.props;
        const {count} = this.state;
        return render(count,this.increment);
    }
}

export default ButtonRenderProp;
