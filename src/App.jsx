import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Login from './pages/Login';
import Register from './pages/Register';
import Errorpage from './pages/404';
import Private from './pages/Private';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Private} />
          <Route component={Errorpage} />
        </Switch>
      </Router>
  )
}

export default App;