import './App.css';
import Navbar from './components/navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Certificats from './pages/Certificates';
import ContactMe from './pages/ContactMe';



function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Routes>
        <Route path="/aboutme" element={ <AboutMe /> }/>
        <Route path="/projects" element={ <Projects />}/>
        <Route path="/certificates" element={<Certificats /> }/>
        <Route path="/contactme" element={<ContactMe />}/>
        <Route path="/" element={<Navigate to="/aboutme" />} />
      </Routes>
    </div>
  );
}


export default App;
