import React from 'react';

export default class Parent extends React.Component{
    addnt=(a,b) => `${a} ${b} ${a}`;
    render(t){
        let text = "I am a parent ";
        if(t) text=t;
        return <div>{text}</div>;
    }
}; 