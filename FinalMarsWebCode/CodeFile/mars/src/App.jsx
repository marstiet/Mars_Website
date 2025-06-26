import './App.css';
import { Navbar } from './components/NavBar/navabr';
import { LandingPage } from './components/landingPage/landingPage';
import  {Irc}  from './components/irc/Irc';
import {Ourteam} from './components/ourteam/ourteam';
import { Footer } from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';
import { Achievement } from './components/achievement/achievement';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/achievement" element={<Achievement/>}/>
      <Route path="/irc" element={<Irc/>}/>
      <Route path="/ourteam" element={<Ourteam/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
