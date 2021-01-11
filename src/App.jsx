import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Header from './components/header';
import Login from './pages/Login';
import Register from './pages/Register';
import Errorpage from './pages/404';
import Private from './pages/Private';

function App() {

  return (
    <HashRouter>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Private} />
          <Route component={Errorpage} />
        </Switch>
      </Router>
    </HashRouter >
  )
}

export default App;