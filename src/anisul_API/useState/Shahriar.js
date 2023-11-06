import {useState} from 'react';

function Shahriar(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [entry, setEntry] = useState([]);
    // const [arr,setArr] = useState([1,2,3,4,5]);
    const Sawvik = (e) => {
        e.preventDefault();
        const kar = {email:email,pass:pass};
        setEntry([...entry,kar]);
    }

    return(<>
    <h1>Sawvik Kar Dipto</h1>
    <h2>Making Login-Form with useState</h2>
    <form action='' onSubmit={Sawvik}>
        <label htmlFor="email">Email : </label><br/>
        <input type='email' name='email' id='email' autoComplete='off'
        value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
        <label htmlFor="pass">Password : </label><br/>
        <input type='password' name='pass' id='pass' autoComplete='off'
        value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <br/><br/>
        <button type='submit'>Click</button> 
    </form>

    {
     entry.map((e)=><><h2>{e.email}</h2><h3>{e.pass}</h3></>)   
    }

    </>);
}

export default Shahriar;