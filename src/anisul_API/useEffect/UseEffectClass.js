// In this class we shall create a time which will run without my starting on or interference in the meantime ; and One button which will change the title of the webpage after clicking (for example: the title would be "clicked 1 time" after first click, the title would be "clicked 2 time" after second click ). We shall do this here using Class component but will learn to do the same thing using useEffect Hook in function Component

// import React from 'react';

// export default class useEffectClass extends React.Component {
//     state = {
//         count:5,
//         date: new Date()
//     }

//     addClick = () => {
//         this.setState(({count})=>({count:count+1}));
//     }

//     componentDidMount(){
//         const {count} = this.state;
//         document.title = `Clicked ${count} times`;
//         setInterval(this.tick, 1000);
//     }

//     componentDidUpdate(){
//         const {count} = this.state;
//         // this.setState(({date})=> ({date: new Date()}));
//         document.title = `Clicked ${count} times`;
//     }

//     tick = () => {
//         this.setState({
//             date:new Date()
//         })
//     }


//     render(){

//         const {date}=this.state;

//         return(
//             <div>
//                 <p>Time: {date.toLocaleTimeString()}</p>
//                 <p>
//                     <button type='button' onClick={this.addClick}>Click</button> 
//                 </p>
//             </div>
//         );
//     }
// }

import React from 'react'; 

export default class useEffectClass extends React.Component{

    state = {
        date: new Date(), count:0
    }

    Click = () => {
        this.setState(({count})=> ({count:count+1}));
    } 

    componentDidMount(){
        const {count} = this.state;
        document.title =   `Clicked ${count} times`;
        setInterval(this.tick,1000);
    }

    componentDidUpdate(){
        const {count} = this.state;
        document.title =   `Clicked ${count} times`;
    }  

    tick =() => {
        this.setState(({date})=>({date: new Date()}));
    }

    render(){

        const {date} = this.state;
        return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
            <button type="button" onClick ={this.Click}>Click</button>
        </div>
        );
        
    }

}