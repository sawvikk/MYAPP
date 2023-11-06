import React from 'react';

function Input ({abc,bcd},refery){
    return(<input ref = {refery} type={abc} placeholder={bcd}/>);
}

export default React.forwardRef(Input);
