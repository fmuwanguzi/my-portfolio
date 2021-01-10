//imports
import { Route, Switch } from 'react-router-dom'
//CSS
import './App.css';
//components

//Pages
import About from './pages/About'
import Github from './pages/Github'
import PastProjects from './pages/PastProjects'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={ About }/>
        <Route path='/pastprojects' component={ PastProjects }/>
        <Route path='github' component={ Github }/>
      </Switch>

    
    </div>
  );
}

export default App;
