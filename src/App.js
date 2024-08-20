
import './App.css';
// import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
