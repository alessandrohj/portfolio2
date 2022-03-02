import {HashRouter, Route, Switch} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import About from './components/About';
import './App.css';
import { useState, useEffect } from 'react';




function App() {
  const [navBarBG, setNavBarBG] = useState(false);

  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10) {
        setNavBarBG(true);
      } else {
        setNavBarBG(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  let Element = Scroll.Element;

  return (
    <HashRouter>
    <NavBar navBarBG={navBarBG} />
    {/* <Switch> */}
      {/* <Route exact path='/' component={Home} />
      <Route path='/tech' component={Tech} />
      <Route path='/project' component={Project} />
      <Route path='/contact' component={Contact} /> */}
      {/* <Route path='/about' component={About} /> */}
    {/* </Switch> */}
    {/* <About/> */}
      <Element id='home'> <Home /></Element>
      <Element id='tech'>  <Tech /></Element>
      <Element id='projects'  className='pb-5'>  <Project /></Element>
    <Footer/>
    </HashRouter>
  );
}

export default App;
