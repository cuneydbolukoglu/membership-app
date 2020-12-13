import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

import Login from './components/Login';
import Register from './components/Register';
import Errorpage from './components/404';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={Errorpage} />
      </Switch>
    </Router>
  )
}

export default App;