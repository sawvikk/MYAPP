import React from 'react';

const Buttonhoc = (ABC) => {
    class Abc extends React.Component{
        state={count:0}; 

        increment= () => {this.setState((a) =>({count: a.count+1}));}; 

        render(){
            const {count} = this.state;

            return(
                <ABC count={count} increment={this.increment} />
            );

        };

    }

    return Abc;
}; 

export default Buttonhoc;