// import Child2 from "./child2";
// import Parent2 from "./parent2";

// function Higherorder(){
//     return (<Parent2>
        
//     </Parent2>);
// }

// export default Higherorder;

// import React from 'react';
import Child2 from './child2';
import Parent2 from './parent2';

export default function higherorder() {
  return (
    <Parent2>
    {({ diya }) => (
        <Child2 sawvik={diya}/>
    )}
    </Parent2>
  )
  ;
}
