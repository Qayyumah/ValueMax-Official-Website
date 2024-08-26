
import './App.css';
// import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
import About from './components/About';
// import Portfolio from './components/Portfolio';


function App() {
  const [loading, setLoading] = useState(false)

  //loader functionality

  useEffect (()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 7000)
  }, [])

  return (
    <Router>
      <div>
        {
          loading?<Loader/>:
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
        </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
