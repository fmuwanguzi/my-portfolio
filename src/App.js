//imports
import { Route, Switch } from 'react-router-dom'
//CSS
import './App.css';
//components
import Navbarup from './components/Navbarup'
//Pages
import About from './pages/About'
import Github from './pages/Github'
import PastProjects from './pages/PastProjects'

function App() {
  return (
    <div className="App">
      <Navbarup /> 
      <Switch>
        <Route exact path='/' component={ About }/>
        <Route exact path='/pastprojects' component={ PastProjects }/>
        <Route exact path='/github' component={ Github }/>
      </Switch>

    
    </div>
  );
}

export default App;
