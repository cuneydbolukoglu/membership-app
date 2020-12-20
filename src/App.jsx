import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/home';
import Errorpage from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Errorpage} />
      </Switch>
    </Router>
  )
}

export default App;