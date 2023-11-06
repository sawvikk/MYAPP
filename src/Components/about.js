import React from 'react';
import De from './delivery';

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date(),locale: "en-US",nam:"Sawvik"};
    this.handle = this.handle.bind(this);
  }

componentDidMount(){
  this.timer = setInterval(()=>
    {this.changeTime()}
    ,1000);
}

componentWillUnmount(){
  clearInterval(this.timer);
}

changeTime(){
  this.setState({date:new Date()})
}

handle(e,f){
  this.setState({locale:e,nam:f});
}

render(){
  console.log(23);
  const {date,locale,nam} = this.state;
  let l;
  if(locale==="bn-BD"){
    l=(
      <De work={this.handle} locale="en-US" name="Ak"/>);
  }
  else{
    l=(
      <De work={this.handle} locale="bn-BD" name="Aj"/>);
  }
  return (<>
  <h2>{nam}</h2>
  <h1>{date.toLocaleTimeString(locale)}</h1>
  {l}
  </>);
  }
}

export default About;
