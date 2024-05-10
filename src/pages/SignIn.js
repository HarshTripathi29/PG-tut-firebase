import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { app } from '../utils/firebase';

const SignIn = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const handleClick = ()=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((value)=>console.log("Sign in Success"))
            .catch((error)=>console.log(error));
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
            <button onClick={handleClick}>Sign ip</button>
          </div>
        </div>
      )
}

export default SignIn
