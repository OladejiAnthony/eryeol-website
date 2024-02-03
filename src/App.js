//import Navbar from './components/navbar/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
//import Project from './pages/Project';
//import ProjectA from './components/section-project/projects/project-iot/ProjectA';
//import Test from './Test';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Test /> */}
          {/* <Route path='/projects' element={<Project />} /> */}
          {/* <Route path='/project-iot' element={<ProjectA />} /> */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
    </div>
   
    
  );
}

export default App;
