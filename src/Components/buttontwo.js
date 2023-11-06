import React from 'react';
class ButtonTwo extends React.Component{
    state={count:0};
    increment=()=>{this.setState((a)=>({count:a.count+2}))};
    render(){
        const {count} = this.state;
        return (
        <div>
            <h1 onClick={this.increment}>
                I have clicked {count}
            </h1>
        </div>);
    }
}

// increment = () => {
//     this.setState((a)=> ({count:a.count+1}));
// };

// render(){
//     const {count} = this.state;
//     return (
//         <div>
//             <button type="button" onClick={this.increment}>Clicked {count} times</button>
//         </div>
//     );
// }



export default ButtonTwo;