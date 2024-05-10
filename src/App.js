import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useEffect, useState } from 'react';
import { app } from './utils/firebase';


function App() {

  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user)
      }
      else{
        console.log("you are logged out");
        setUser(user);
      }
    });
  },[]);

  if(user==null){
    return(
      <div>
        <SignUp/>
    <SignIn/>
      </div>
    )
  }


  return (
    <div className="App">
    <h1>Hello {user.email}</h1>
    <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
