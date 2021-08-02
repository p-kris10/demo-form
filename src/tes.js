
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './home.component';
import FormPage from './formpage.component';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/form">
              <FormPage />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
