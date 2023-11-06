import React from 'react';
import ReactDOM  from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import UseMemo from './anisul_API/useMemo/UseMemo';
// import Hudai from './anisul_API/useMemo/hudai';
// function Somoy({locale}){
//   return (<h1 style={{color:'red',padding:"10px"}}>Somoyta holo {new Date().toLocaleTimeString(locale)}</h1>); 
// }
// import store from './redux/Store';
// import { Provider } from 'react-redux';
import Hook from './Components/hook';
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store ={store}>
      <App/>
    </Provider>  */}
    <Hook/>
  </React.StrictMode>,
  document.getElementById('root'));

// const root = createRoot(document.getElementById('root'));

// root.render(<App/>,);

reportWebVitals();

// ReactDOM.render(<Somoy/>,document.getElementById('root'));