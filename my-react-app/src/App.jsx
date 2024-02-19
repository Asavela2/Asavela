import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from'./components/About';
import Contact from'./components/Contact';
import Project from'./components/Project';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      < Home/>
      < About/>
      < Project/>
      < Contact/>
      <NavBar/>
    </div>
  );
}

export default App;
