import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from'./components/About';
import Contact from'./components/Contact';
import Project from'./components/Project';

const App = () => {
  return (
    <div className="App">
      < Home/>
      < About/>
      < Project/>
      < Contact/>
  
    </div>
  );
}

export default App;
