//import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Service from './pages/Service';
import Contact from './pages/Contact';
import ProjectA from './components/section-project/projects/project-iot/ProjectA';
//import Test from './Test';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Test /> */}
        <Route path='/project-iot' element={<ProjectA />} />
      </Routes>
    </BrowserRouter>
    </div>
   
    
  );
}

export default App;
