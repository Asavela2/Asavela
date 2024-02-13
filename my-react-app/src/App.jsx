import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from'./components/About';
import Contact from'./components/Contact';

const App = () => {
  return (
    <div className="App">
      < Home/>
      < About/>
      < Contact/>
  
    </div>
  );
}

export default App;
