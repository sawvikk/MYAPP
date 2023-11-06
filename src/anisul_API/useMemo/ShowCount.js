import React from 'react';

function ShowCount ({count,title}){
    
    console.log(`${title} is being used.`);
    return(<div>
        <h1>{title} is title</h1>
        <h1>{count} is count</h1>
    </div>);
}

export default React.memo(ShowCount);