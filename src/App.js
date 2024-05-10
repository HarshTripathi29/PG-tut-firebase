import './App.css';
import SignUp from './pages/SignUp';
import { app } from './utils/firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

function App() {

  return (
    <div className="App">
    <h1>Firebase react app</h1>
    <SignUp/>
    </div>
  );
}

export default App;
