import React from 'react';

const HomeHujur = () => {
    
    const [data,setdata] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((json) => setdata(json)
  );


    return (
        <div>
            
        </div>
    );
}

export default HomeHujur;
