import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Channel from "./pages/Channel";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/channel/:id" component={Channel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
