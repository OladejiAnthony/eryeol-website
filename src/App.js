//import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Service from './pages/Service';
import Contact from './pages/Contact';
//import Test from './Test';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About Us' element={<About />} />
        <Route path='/Projects' element={<Project />} />
        <Route path='/Our Services' element={<Service />} />
        <Route path='/Contact Us' element={<Contact />} />
        {/* <Test /> */}
      </Routes>
    </BrowserRouter>
    </div>
   
    
  );
}

export default App;
