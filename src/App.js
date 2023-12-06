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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/service' element={<Service />} />
        <Route path='contact' element={<Contact />} />
        {/* <Test /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
