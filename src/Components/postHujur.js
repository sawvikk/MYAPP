import React from 'react';

const Posth = ({props}) => {

    let links = "./PostDetails/"+props.ID;

    return (
        <div>
            <link to={{links}} ><h1>{props.title}</h1></link>
        </div>
    );
}

export default Posth;
