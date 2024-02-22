import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from'./components/About';
import Contact from'./components/Contact';
import Project from'./components/Project';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="App">
      < Home/>
      < About/>
      < Project/>
      < Contact/>
     <Navbar/>
    
    </div>
    
  );
}

export default App;

