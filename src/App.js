
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'



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
            <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
