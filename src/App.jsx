import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Errorpage from './pages/404';
import Private from "./pages/private";

function App() {
  return (
    <HashRouter>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/private" component={Private} />
        <Route component={Errorpage} />
      </Switch>
      <Footer />
    </Router>
    </HashRouter>
  )
}

export default App;