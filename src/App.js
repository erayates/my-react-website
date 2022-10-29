import logo from './logo.svg';
import './App.css';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
