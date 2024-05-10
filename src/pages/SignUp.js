import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../utils/firebase';

const auth = getAuth(app);

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const handleClick = ()=>{
        createUserWithEmailAndPassword(auth, email, password).then((value)=>alert("Success"));
    }
  return (
    <div>
      <div>
        <label>email</label>
        <input 
        type="email" 
        required 
        placeholder='email'
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <label>password</label>
        <input 
        type="password" 
        required 
        value={password}
        placeholder='password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Sign Up</button>
      </div>
    </div>
  )
}
export default SignUp
