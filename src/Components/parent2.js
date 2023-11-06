import React from 'react';

export default class Parent2 extends React.Component{

    addnt = (a,aa)  => `${a} ${aa} ${a}`; 
    render(){
        return this.props.children({diya:this.addnt});
    }
}