import logo from './logo.svg';
import './App.css';
import Frontpage from './Component/Frontpage';
import { useEffect } from 'react';

function App() {
//   useEffect(()=>{
// alert("This is the Static page and non-responsive to any other screen then laptop with 1920 X 1080 resolution")
//   },)
  return (
    <div className="App overflow-x-hidden">
      <Frontpage />
    </div>
  );
}

export default App;
