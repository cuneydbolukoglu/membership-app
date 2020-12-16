import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import Errorpage from './pages/404';

import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route component={Errorpage} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;