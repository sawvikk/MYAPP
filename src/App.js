// import logo from './logo.svg';
// import './App.css';
// /* import Form from './anisul_API/useRef/form';
// import Time from './anisul_API/useRef/Time';
// import UseReducer from './anisul_API/useReducer/useReducer';
// */
// import About from './Components/about';
// import Fun from './anisul_API/fun';

import Counter from "./anisul_redux/Counter";

// function App(){
//   return (
//     <div className='App'>
//       <div>
//         <About/>
//       </div>
//     </div>
//   );
// }

// export default App;

// // <div className='App'>
// //   <header className='App-header'>
// //     <img src={logo} className='App-logo' alt="logo"/>
// //     <p>
// //       Edit <code>src/App.js</code> and save to reload
// //     </p>
// //     <a className='App-link' href='https://reactjs.org' target="_blank" rel="noopener noreferrer">Learn React</a>
// //   </header>
// // </div>

// // import React from 'react';
// // // import ReactDOM from 'react-dom';
// // import NavBar from './anisul_API/React Router/NavBar';
// // import { Routes,Route } from 'react-router-dom';
// // import Home from './anisul_API/React Router/Home';
// // import About from './anisul_API/React Router/About';
// // // import Products from './anisul_API/React Router/Products';
// // import OrderSummary from './anisul_API/React Router/OrderSummary';
// // import NotFound from './anisul_API/React Router/NotFound';
// // import Featured from './anisul_API/React Router/Featured';
// // import New from './anisul_API/React Router/New';
// // import {Products} from './anisul_API/React Router/Products';



// // function App(){
// //     return( <>
// //     <NavBar/>
// //     <Routes>
// //       <Route path='/' element={<Home/>}>Home</Route>
// //       <Route path='about' element={<About/>}/>
// //       <Route path='products' element={<Products/>}>
// //         <Route path='featured' element={<Featured/>}/>
// //         <Route index element={<Featured/>}/>
// //         <Route path='new' element={<New/>} />
// //       </Route>
// //       <Route path='ordersummary' element={<OrderSummary/>}/>

        
// //       <Route path='*' element={<NotFound/>}/>

// //     </Routes>
// //   </>
// // );
// // }


// // export default App;

// import Reduxapp from "./redux/Reduxapp";

function App(){
  return(
    <div className="App">
      <Counter/>
    </div>
  )
}

export default App;