import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Channel from "./pages/Channel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/channel/:id" element={<Channel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
