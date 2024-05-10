import logo from './logo.svg';
import './App.css';
import { app } from './utils/firebase';
import {getDatabase, set, ref} from 'firebase/database';

const db = getDatabase(app);

function App() {

const putData=()=>{
  set(ref(db, 'users/harsh'),{
    id : 1,
    name : "harsh",
    age : 22,
  });
};

  return (
    <div className="App">
    <h1>Firebase react app</h1>
    <button onClick={putData}>put data in the realtime db</button>
    </div>
  );
}

export default App;
