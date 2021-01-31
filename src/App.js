//imports
import { Route, Switch } from 'react-router-dom'
//CSS
import './App.css';
//components
import Navbarup from './components/Navbarup'
import Footer from './components/Footer'
//Pages
import About from './pages/About'
import Contact from './pages/Contact'
import PastProjects from './pages/PastProjects'

function App() {
  return (
    <div className="App">
      <Navbarup /> 
      <Switch>
        <Route exact path='/' component={ About }/>
        <Route exact path='/pastprojects' component={ PastProjects }/>
        <Route exact path='/contact' component={ Contact }/>
      </Switch>
      
      <Footer />
    
    </div>
  );
}

export default App;
