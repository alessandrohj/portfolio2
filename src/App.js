import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Project from './components/Project';
import NavBar from './components/NavBar';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/tech' component={Tech} />
      <Route path='/project' component={Project} />
      <Route path='/contact' component={Contact} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
